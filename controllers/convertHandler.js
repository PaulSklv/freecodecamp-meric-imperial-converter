/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  const checkRegExp = /(^l$)|(^kg$)|(^km$)|(^gal$)|(^lbs$)|(^mi$)/gi;
  
  const galToL = 3.78541;
  const lbsToKg = 0.453592;
  const miToKm = 1.60934;
  
  const units = {
      "l": ["gal", "gallons",    initNum => {return initNum/galToL}],
      "kg": ["lbs", "pounds",    initNum => {return initNum/lbsToKg}],
      "km": ["mi", "miles",      initNum => {return initNum/miToKm}],
      "gal": ["l", "liters",     initNum => {return initNum*galToL}],
      "lbs": ["kg", "kilograms", initNum => {return initNum*lbsToKg}],
      "mi": ["km", "kilometers", initNum => {return initNum*miToKm}]
    }
  this.getNum = function(input) {
    let result = parseFloat(input.substring(0, input.search(/[a-zA-Z]/g)));
    console.log(result)
    return result;
  };
  
  this.getUnit = function(input) {
    
    let result = input.substring(input.search(/[a-zA-Z]/g)).toLowerCase();
    console.log(result)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    console.log(initUnit)
    if(!checkRegExp.test(initUnit)) return false;
    
    return units[initUnit.toLowerCase()][0];
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    console.log(initUnit)
    if(!checkRegExp.test(initUnit)) return false;
    
    return units[initUnit][2](initNum).toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
