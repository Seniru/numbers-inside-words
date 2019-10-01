const assert = require("assert");
const nw = require("../src/core");

describe("Numbers Inside Words", () => {
    describe("#create()", () => {
        it("Should convert words", () => {
            assert.equal(nw.create("minecraft"), "m1n3cr4ft");
            assert.equal(nw.create("oOaAeEiI"), "00443311");
            assert.equal(nw.create("InSide"), "1nS1d3");
        });
        it("Should convert sentences", () => {
            assert.equal(nw.create("Chicken Nuggets are Tasty!"), "Ch1ck3n Nugg3ts 4r3 T4sty!");
            assert.equal(nw.create("Lorem  Ipsum"), "L0r3m  1psum");
            assert.equal(nw.create("Order from Chaos"), "0rd3r fr0m Ch40s");
        });
        it("Shouldn't convert other symbols and letters", () => {
            assert.equal(nw.create("bcdfghjkl"), "bcdfghjkl");
            assert.equal(nw.create("~!@#$%^&*()_+|"), "~!@#$%^&*()_+|");
            assert.equal(nw.create("    "), "    ");
        })
    });
});

