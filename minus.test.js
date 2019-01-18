const minus = require('./minus');

test('5 - 1 เท่ากับ 4', ()=> {
    expect(minus(5,1)).toBe(4);
});

test('6 - 8 เท่ากับ -2', ()=> {
    expect(minus(6,8)).toBe(-2);
});

test('21 - 7 เท่ากับ 14', ()=> {
    expect(minus(21,7)).toBe(14);
});

test('12 - 3 เท่ากับ 9', ()=> {
    expect(minus(12,3)).toBe(9);
});

test('13 - 20 เท่ากับ -7', ()=> {
    expect(minus(13,20)).toBe(-7);
});

test('8 - 7 เท่ากับ 1', ()=> {
    expect(minus(8,7)).toBe(1);
});