function add(numbers) {
    if (numbers == "") {
        return 0;
    }
    if (numbers.includes("," || "\n")) {
        return sum(numbers);
    }

    else {
        return parseInt(numbers);
    }
}

function sum(numbers) {
    var numbersArray = numbers.split("," || "\n");
    total = 0;
    for (i = 0; i < numbersArray.length; i++) {
        total += parseInt(numbersArray[i]);
    }
    return total;
}

module.exports = add;

// This comment is a testament to the fact that the folder restructuring worked and everything is fine in GitHub