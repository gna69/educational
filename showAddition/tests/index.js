const units = require('./units');
const decades = require('./decades');
const hundreds = require('./hundreds');
const thousands = require('./thousands');
const bigNumbers = require('./big-numbers');
const showAddition = require('../index').showAdditions;

describe("Тест функции showAddition", () => {
    units(showAddition);
    decades(showAddition);
    hundreds(showAddition);
    thousands(showAddition);
    bigNumbers(showAddition);
});
