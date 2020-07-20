const { gradeClassifier } = require('./index');

describe('Grade Classifier Group', () => {
    it('When Grade is between or equal to 100 and 95 Then It Should Show "Outstanding"', () => {
        var grade = 95;
        var expectedString = "O - Outstanding";

        var result = gradeClassifier(grade)

        expect(result).toBe(expectedString)
    });

    it('When Grade is between or equal to 94.99 and 90 Then It Should Show "Very Good"', () => {
        var grade = 90;
        var expectedString = "V - Very Good";

        var result = gradeClassifier(grade)

        expect(result).toBe(expectedString)
    });

    it('When Grade is between or equal to 89.99 and 85 Then It Should Show "Good"', () => {
        var grade = 85;
        var expectedString = "G - Good";

        var result = gradeClassifier(grade)

        expect(result).toBe(expectedString)
    });

    it('When Grade is between or equal to 84.99 and 80 Then It Should Show "Satisfactory"', () => {
        var grade = 80;
        var expectedString = "S - Satisfactory";

        var result = gradeClassifier(grade)

        expect(result).toBe(expectedString)
    });

    it('When Grade is between or equal to 79.99 and 75 Then It Should Show "Needs Improvement"', () => {
        var grade = 75;
        var expectedString = "N - Needs Improvement";

        var result = gradeClassifier(grade)

        expect(result).toBe(expectedString)
    });

    it('When Grade is between or equal to 74.99 and 0 Then It Should Show "Did not Meet Expectation"', () => {
        var grade = 74;
        var expectedString = "D - Did not Meet Expectation";

        var result = gradeClassifier(grade)

        expect(result).toBe(expectedString)
    });

    it('When Grade is Negative Then It Should Show "Invalid Grade"', () => {
        var grade = 101;
        var expectedString = "Invalid Grade";

        var result = gradeClassifier(grade)

        expect(result).toBe(expectedString)
    });

    it('When Grade is Above 100 Then It Should Show "Invalid Grade"', () => {
        var grade = 101;
        var expectedString = "Invalid Grade";

        var result = gradeClassifier(grade)

        expect(result).toBe(expectedString)
    });

    it('When Grade is Non-Numeric Then It Should Show "Invalid Grade"', () => {
        var grade = "AI!@&^#* @$kdas";
        var expectedString = "Invalid Grade";

        var result = gradeClassifier(grade)

        expect(result).toBe(expectedString)
    });
});

// https://github.com/Stephenalexngo/prosdev-hw-unittest.git