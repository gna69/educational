const assert = require('assert');

module.exports = (testFunc) => {
    describe("Сотни", () => {
        it('Должен быть 100', () => {
            assert.equal(testFunc(100), "100");
        });

        it('Должен быть 100 + 1', () => {
            assert.equal(testFunc(101), "100+1");
        });

        it('Должен быть 100 + 20', () => {
            assert.equal(testFunc(120), "100+20");
        });

        it('Должен быть 100 + 20 + 1', () => {
            assert.equal(testFunc(121), "100+20+1");
        });
    });
}