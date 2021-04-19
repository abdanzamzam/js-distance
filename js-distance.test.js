const jsDistance = require("./js-distance");

const jsDistanceObj = new jsDistance(
    -6.2973856,
    106.6388177,
    -6.3027637,
    106.6410986
)

test("count distance to miles (default)", () => {
    expect(jsDistanceObj.count().toMiles()).toBe(0.40323837020908365);
});

test("count distance to miles (default)", () => {
    expect(jsDistanceObj.count().toKilometre()).toBe(0.6489492516657676);
});
