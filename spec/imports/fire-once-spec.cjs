/**
 * Test isolated common js import dependencies (cjs)
 */

const FireOnce = require("../../src/fire-once/fire-once.js");

describe('FireOnce', function () {
    it('parse recursive', function () {
        expect(typeof FireOnce.fire).toEqual("function");
    })
})

