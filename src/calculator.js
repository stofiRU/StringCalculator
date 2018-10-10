function add(numbers) {
    if (numbers == "") {
        return 0;
    }
    if (numbers.includes(",")) {
        return sum(numbers);
    }

    else {
        return parseInt(numbers);
    }
}

function sum(numbers) {
    var numbersArray = numbers.split(",");
    total = 0;
    for (i = 0; i < numbersArray.length; i++) {
        total += parseInt(numbersArray[i]);
    }
    return total;
}

module.exports = add;