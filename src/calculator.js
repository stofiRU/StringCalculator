function add(numbers) {     // adds string of numbers
    if (numbers == "") {    // empty string returns 0
        return 0;
    }
    else if (numbers.includes("\n") || numbers.includes(",")) {     // if string includes commas or newlines
        var numbersArray = numbers.split(/[\n,]+/);                 // split the string by the commas and newlines, using reg expr
        return sum(numbersArray);                                   // return the sum
    }
    else {
        return parseInt(numbers);                                   // if the string doesn't include commas or newlines, it's a single number. Parse and return
    }
}

function sum(numbersArr) {                      // summarize the numbers
    total = 0;
    for(i = 0; i < numbersArr.length; i++) {    // basic sum loop
        total += parseInt(numbersArr[i]);
    }
    return total;
}

module.exports = add;