function solution (roman) {
    let intValue = 0;
    const symbolValues = getSymblolValues();
    for (var i = 0; i < roman.length; i++) {
        const currentValue = symbolValues.get(roman.charAt(i));
        const nextValue = symbolValues.get(roman.charAt(i+1));
        if(currentValue < nextValue) {
            intValue += (nextValue - currentValue);
            i++;
        }
        else {
            intValue += currentValue;
        }
    }
    return intValue;
}

 function getSymblolValues() {
    let symbolValues = new Map();
    symbolValues.set("I", 1);
    symbolValues.set("V", 5);
    symbolValues.set("X", 10);
    symbolValues.set("L", 50);
    symbolValues.set("C", 100);
    symbolValues.set("D", 500);
    symbolValues.set("M", 1000);
    return symbolValues;
 }

