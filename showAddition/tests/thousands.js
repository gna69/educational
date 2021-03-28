const assert = require('assert');

module.exports = (testFunc) => {
    describe("Сотни", () => {
        it('Должен быть 1000', () => {
            assert.equal(testFunc(1000), "1000");
        });

        it('Должен быть 1000 + 1', () => {
            assert.equal(testFunc(1001), "1000+1");
        });

        it('Должен быть 1000 + 20', () => {
            assert.equal(testFunc(1020), "1000+20");
        });

        it('Должен быть 1000 + 200', () => {
            assert.equal(testFunc(1200), "1000+200");
        });

        it('Должен быть 1000 + 200 + 1', () => {
            assert.equal(testFunc(1201), "1000+200+1");
        });

        it('Должен быть 1000 + 20 + 1', () => {
            assert.equal(testFunc(1021), "1000+20+1");
        });

        it('Должен быть 1000 + 200 + 20 + 1', () => {
            assert.equal(testFunc(1221), "1000+200+20+1");
        });
    });
}