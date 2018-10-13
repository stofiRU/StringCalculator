const add = require("./calculator"); // import calculator

it("should return zero on an empty string", () => { 
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => { 
    expect(add("5")).toBe(5);
});

it("should return sum of numbers when multiples numbers are in the string", () => { 
    expect(add("1,2,3")).toBe(6);
});

it("should return sum of numbers when multiples numbers are in the string, even with partial spaces", () => { 
    expect(add("1, 4,3")).toBe(8);
});

it("should return sum of numbers when multiples numbers are in the string, even with total spaces", () => { 
    expect(add("1, 4, 9")).toBe(14);
});

it("should return sum of numbers when an unexpected amount of numbers/arguments are in the string", () => { 
    expect(add("5, 11, 34, 63, 785, 11, 5653, 233, 1")).toBe(6796);
});

it("should return sum of numbers when a new line is in the string", () => { 
    expect(add("1\n3\n2")).toBe(6);
});

it("should throw exception when negatives are in the string", () => { 
    expect(() => {
        add("1, 3, 5, -6")
    }).toThrow();
});