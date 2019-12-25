/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const units = {
      "l": ["gal", "gallons"],
      "kg": ["lbs", "pounds"],
      "km": ["mi", "miles"],
      "gal": ["l", "liters"],
      "lbs": ["kg", "kilograms"],
      "mi": ["km", "kilometers"]
    }
  this.getNum = function(input) {
    let result = parseFloat(input.substring(0, input.search(/[a-zA-Z]/g)));
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.substring(input.search(/[a-zA-Z]/g));
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    
    const checkRegExp = /(^l$)|(^kg$)|(^km$)|(^gal$)|(^lbs$)|(^mi$)/gi;
    
    if(!checkRegExp.test(initUnit)) return false;
    
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
