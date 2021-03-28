const assert = require('assert');

module.exports = (testFunc) => {
    describe("Цифры", () => {
        it('Должен быть 0', () => {
            assert.equal(testFunc(0), "0");
        });

        it('Должен быть 1', () => {
            assert.equal(testFunc(1), "1");
        });

        it('Должен быть 2', () => {
            assert.equal(testFunc(2), "2");
        });

        it('Должен быть 3', () => {
            assert.equal(testFunc(3), "3");
        });

        it('Должен быть 4', () => {
            assert.equal(testFunc(4), "4");
        });

        it('Должен быть 5', () => {
            assert.equal(testFunc(5), "5");
        });

        it('Должен быть 6', () => {
            assert.equal(testFunc(6), "6");
        });

        it('Должен быть 7', () => {
            assert.equal(testFunc(7), "7");
        });

        it('Должен быть 8', () => {
            assert.equal(testFunc(8), "8");
        });

        it('Должен быть 9', () => {
            assert.equal(testFunc(9), "9");
        });
    });
}