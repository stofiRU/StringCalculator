function add(numbers) {     // adds string of numbers

    if (numbers == "") {    // empty string returns 0
        return 0;
    }
    parsedNumbers = parseString (numbers);  // parse the string
    checkForNegatives(parsedNumbers);       // 
    return sum(parsedNumbers);
}

function parseString (numbersString) {
    return numbersArray = numbersString.split(/[\n,]+/);
}

function sum(numbersArr) {                      // summarize the numbers
    total = 0;
    for(i = 0; i < numbersArr.length; i++) {    // basic sum loop
        num = parseInt(numbersArr[i]);
        if(num < 1000) {                        // ignore number if it's over 1000
            total += num;
        }
    }
    return total;
}

function checkForNegatives (numbers) {          // check if numbers array has any negative values
    var negNumbers = [];                        // array of neg numbers
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {                   // if a number is negative
            negNumbers.push(numbers[i]);        // add to the array of neg numbers
        }
        if (negNumbers.length > 0) {            // if we have any neg numbers
            throw("Negatives not allowed: " + negNumbers);   // throw exception, text + list of neg numbers
        }
    }
}

module.exports = add;