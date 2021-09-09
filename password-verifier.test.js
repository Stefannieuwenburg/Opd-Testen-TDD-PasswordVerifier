const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("./password-verifier");


// All Utility functions
describe("These are the Utility functions", () => {

    // Password less than 9 characters:
    test("Less than 9 characters", () => {
        expect(hasRightLength("123456789")).toBe(false);
    });

    // Password isn NOT Null
    test("Password is not empty", () => {
        expect(isNotNull()).not.toBeNull();
    });

    // Password contains 1 or more uppercase characters

    test("Contains one or more Uppercase", () => {
        expect(hasUpperCaseCharacter("A")).toBe(true);
    });
    test("Contains one or more Uppercase", () => {
        expect(hasUpperCaseCharacter("a")).toBe(false);
    });

    // Password contains 1 or more lowercase characters

    test("Contains one or more Lowercase", () => {
        expect(hasLowerCaseCharacter("A")).toBe(false);
    });
    test("Contains one or more Lowercase", () => {
        expect(hasLowerCaseCharacter("a")).toBe(true);
    });

    // Password contains 1 or more numbers

    test("Contains one or more Numbers", () => {
        expect(hasDigit("0")).toBe(true);
    });

    test("Contains no digits", () => {
        expect(hasDigit("aA")).toBe(false);
    })
})

// Minimum conditions

// 3 of 5 conditions must be true.
// 1 or more Lowercase must always be true.

describe("These are the minimum conditions", () => {
    test("Minimum of 3 conditions are true", () => {
        expect(minimumConditionsReached([true, true, true, false, false])).toBe(true);
    });

    test("Lowercase MUST be part of minimum condition", () => {
        expect(hasLowerCaseCharacter("a")).toBe(true);
    });
})

// Verify Password

describe("Verification of the password", () => {
    test("Verify password empy", () => {
        expect(verifyPassword("")).toBe(false);
    });

    test("Verify password only digits", () => {
        expect(verifyPassword("12345678")).toBe(false);
    });

    test("Verify password Lower Case", () => {
        expect(verifyPassword("abcdefgh")).toBe(true);
    });

    test("Verify password Upper Case", () => {
        expect(verifyPassword("ABCDEFGH")).toBe(false);
    });

    test("Verify password Too long Lower Case", () => {
        expect(verifyPassword("abcdefghi")).toBe(false);
    });

    test("Verify password how it should be", () => {
        expect(verifyPassword("Aa1")).toBe(true);
    });

    test("Verify password HENK33$", () => {
        expect(verifyPassword("HENK33$")).toBe(false)
    });

    test("Verify password 1234", () => {
        expect(verifyPassword("1234")).toBe(false)
    });

})