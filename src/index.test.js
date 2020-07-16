const { gradeClassifier } = require('./index');

describe('Grade Classifier Group', () => {
    it('Should Show Oustanding Grade', () => {
        var grade = 96;
        var expectedString = "O - Oustanding";

        expect(gradeClassifier(grade)).toBe(expectedString)
    });

    it('Should Show Very Good Grade', () => {
        var grade = 92;
        var expectedString = "V - Very Good";

        expect(gradeClassifier(grade)).toBe(expectedString)
    });

    it('Should Show Good Grade', () => {
        var grade = 87;
        var expectedString = "G - Good";

        expect(gradeClassifier(grade)).toBe(expectedString)
    });

    it('Should Show Satisfactory Grade', () => {
        var grade = 84;
        var expectedString = "S - Satisfactory";

        expect(gradeClassifier(grade)).toBe(expectedString)
    });

    it('Should Show Needs Improvement Grade', () => {
        var grade = 77;
        var expectedString = "N - Needs Improvement";

        expect(gradeClassifier(grade)).toBe(expectedString)
    });

    it('Should Show Did not Meet Expectation Grade', () => {
        var grade = 55;
        var expectedString = "D - Did not Meet Expectation";

        expect(gradeClassifier(grade)).toBe(expectedString)
    });
});