/**
 * Test isolated module import dependencies (mjs)
 */

import FireOnce from "../../src/fire-once/fire-once.js";

describe('FireOnce', function () {
    it('parse recursive', function () {
        expect(typeof FireOnce.fire).toEqual("function");
    })
})

