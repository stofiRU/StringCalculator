function add(numbers) {     // adds string of numbers

    if (numbers == "") {    // empty string returns 0
        return 0;
    }
    parsedNumbers = parseString (numbers);
    return sum(parsedNumbers);
}

function parseString (numbersString) {
    return numbersArray = numbersString.split(/[\n,]+/);
}

function sum(numbersArr) {                      // summarize the numbers
    total = 0;
    for(i = 0; i < numbersArr.length; i++) {    // basic sum loop
        total += parseInt(numbersArr[i]);
    }
    return total;
}

module.exports = add;