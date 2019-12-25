/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  const checkRegExp = /(^l$)|(^kg$)|(^km$)|(^gal$)|(^lbs$)|(^mi$)/i;
  
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
    let result;
    // if(checkRegExp.test(input)) return 1;
    result = input.substring(0, input.search(/[a-zA-Z]/g));

    if(result === "" && input.search(/\d/g ) !== -1 && input.search(/[a-zA-Z]/g) !== -1) return false;
    else if(result === "" && input.search(/\d/g) === -1) return 1;
    else if(result === "" && input.search(/[a-zA-Z]/g) === -1) return parseFloat(input);
    else {
      if(result.search('/') !== -1) {
        let splitedArr = result.split('/');
        console.log(splitedArr)
        return parseFloat(splitedArr[0]) / parseFloat(splitedArr[1]) 
      } else return parseFloat(result);
    }
  };
  
  this.getUnit = function(input) {
    let result = input.substring(input.search(/[a-zA-Z]/g));
    if(result === "") return "Unit is missing";
    else if(result.search(/\d/g) !== -1 && /\d/g.test(result[result.length - 1])) return "Unit is missing";
    else if(result.search(/\d/g) !== -1 && !/\d/g.test(result[result.length - 1])) {
      let splitedResult = result.split(/([\d.\d]+)/);
      if(!checkRegExp.test(splitedResult[splitedResult.length - 1])) return false;
    }
    if(!checkRegExp.test(result)) return false;
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    return units[initUnit.toLowerCase()][0];
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {    
    return units[initUnit][2](initNum).toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
