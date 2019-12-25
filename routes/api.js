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
      var initUnit = convertHandler.getUnit(input);
      if(!initNum && initUnit) res.json({error: "Invalid number"});
      else if(!initUnit && initNum) res.json({error: "Invalid unit"});
      else if(!initNum && !initUnit) res.json({error: "Invalid number and unit"});
      else if(initUnit === "Unit is missing") res.json({error:"Unit is missing"});
      else {
        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        res.json({initNum, initUnit, returnNum, returnUnit})
      }
    });
    
};
