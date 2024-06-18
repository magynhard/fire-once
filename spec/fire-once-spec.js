const FireOnce = require('../src/fire-once/fire-once.js');

//----------------------------------------------------------------------------------------------------

describe('FireOnce.fire', function () {
    describe('method available test', function () {
        it('check if the fire method is available', function () {
            expect(typeof FireOnce.fire).toEqual("function");
        });
    });
});

//----------------------------------------------------------------------------------------------------