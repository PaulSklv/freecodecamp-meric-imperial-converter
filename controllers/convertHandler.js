/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = parseFloat(input.substring(0, input.search(/[a-zA-Z]/g)));
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.substring(input.search(/[a-zA-Z]/g));
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const units
    const chekRegExp = /(^l$)|(^kg$)|(^km$)|(^gal$)|(^lbs$)|(^mi$)/gi;
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
