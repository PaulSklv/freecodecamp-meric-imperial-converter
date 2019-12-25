/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      if(!initNum) res.json({error: "Invalid number"});
      var initUnit = convertHandler.getUnit(input);
      if(!initUnit) res.json({error: "Invalid unit"});
      if(!initNum && !initUnit) res.json({error: "Invalid number and unit"});
      else {
        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        res.json({initNum, initUnit, returnNum, returnUnit})
      }
    });
    
};
