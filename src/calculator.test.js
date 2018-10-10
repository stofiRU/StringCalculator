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