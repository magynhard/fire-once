const isRunningNode = typeof process === 'object';

if(isRunningNode) {
    FireOnce = require('../src/fire-once/fire-once.js');
}

//----------------------------------------------------------------------------------------------------

describe('FireOnce', function () {
    describe('.fire', function () {
        it('check if the fire method is available', function () {
            expect(typeof FireOnce.fire).toEqual("function");
        });
        it('fire with default type "both" and includes start and end', function (done) {
            let results = [];
            const fireFun = (param) => {
              results.push(param);
            };
            for(let i = 5; i <= 95; ++i) {
                FireOnce.fire('fun', () => { fireFun(i); }, { period: 400 });
            }
            setTimeout(() => {
                expect(results).toEqual([5,95]);
                done();
            },500);
        });
        it('fire with default type "both" and includes start only', function (done) {
            let results2 = [];
            const fireFun = (param) => {
              results2.push(param);
            };
            for(let i = 7; i <= 97; ++i) {
                FireOnce.fire('fun2', () => { fireFun(i); }, { period: 800 });
            }
            setTimeout(() => {
                expect(results2).toEqual([7]);
                expect(results2[1]).toEqual(undefined);
                done();
            },400);
        });
    });
});

//----------------------------------------------------------------------------------------------------