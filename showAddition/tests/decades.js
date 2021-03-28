const assert = require('assert');

module.exports = (testFunc) => {
    describe("Десятки", () => {
        it('Должен быть 10', () => {
            assert.equal(testFunc(10), "10");
        });

        it('Должен быть 20 + 1', () => {
            assert.equal(testFunc(21), "20+1");
        });

        it('Должен быть 30 + 2', () => {
            assert.equal(testFunc(32), "30+2");
        });

        it('Должен быть 40 + 3', () => {
            assert.equal(testFunc(43), "40+3");
        });

        it('Должен быть 50 + 4', () => {
            assert.equal(testFunc(54), "50+4");
        });

        it('Должен быть 60 + 5', () => {
            assert.equal(testFunc(65), "60+5");
        });

        it('Должен быть 60 + 9', () => {
            assert.equal(testFunc(69), "60+9");
        });

        it('Должен быть 80 + 7', () => {
            assert.equal(testFunc(87), "80+7");
        });

        it('Должен быть 80', () => {
            assert.equal(testFunc(80), "80");

        });

        it('Должен быть 90 + 9', () => {
            assert.equal(testFunc(99), "90+9");
        });
    });
}