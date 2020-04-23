const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", function () {
  it("run all tests", () => {
    expect(true).toBe(true);
  });
  describe(".succeed(item)", () => {
    it("success return item with enhancement", () => {
      expect(
        enhancer.succeed({
          name: "jon",
          durability: 55,
          enhancement: 9,
        })
      ).toEqual({
        name: "jon",
        durability: 55,
        enhancement: 10,
      });
      expect(
        enhancer.succeed({
          name: "jorje",
          durability: 76,
          enhancement: 20,
        })
      ).toEqual({
        name: "jorje",
        durability: 76,
        enhancement: 20,
      });
    });
  });
  describe(".fail(item)", () => {
    it("fail return item with correct enhancement", () => {
      expect(
        enhancer.fail({
          name: "ajax",
          durability: 55,
          enhancement: 5,
        })
      ).toEqual({
        name: "ajax",
        durability: 50,
        enhancement: 5,
      });
      expect(
        enhancer.fail({
          name: "sally",
          durability: 57,
          enhancement: 15,
        })
      ).toEqual({
        name: "sally",
        durability: 47,
        enhancement: 15,
      });
      expect(
        enhancer.fail({
          name: "syntax",
          durability: 90,
          enhancement: 18,
        })
      ).toEqual({
        name: "syntax",
        durability: 80,
        enhancement: 17,
      });
    });
  });
  describe(".repair(item)", () => {
    it("repair return item with durability", () => {
      expect(
        enhancer.repair({
          name: "joe",
          durability: 36,
          enhancement: 0,
        })
      ).toEqual({
        name: "joe",
        durability: 100,
        enhancement: 0,
      });
      expect(
        enhancer.repair({
          name: "joe",
          durability: 100,
          enhancement: 14,
        })
      ).toEqual({
        name: "joe",
        durability: 100,
        enhancement: 14,
      });
    });
});
});
