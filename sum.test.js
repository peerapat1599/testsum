const sum = require('./sum');

test('1 + 2 เท่ากับ 3', ()=> {
    expect(sum(1,2)).toBe(3);
});

test('20 + 1 เท่ากับ 21', ()=> {
    expect(sum(20,1)).toBe(21);
});

test('2 + 5 เท่ากับ 7', ()=> {
    expect(sum(2,5)).toBe(7);
});

test('10 + 5 เท่ากับ 15', ()=>{
    expect(sum(10,5)).toBe(15);
});

test('7 + 9 เท่ากับ 16', ()=>{
    expect(sum(7,9)).toBe(16);
});

test('4 + 2 เท่ากับ 6', ()=>{
    expect(sum(4,2)).toBe(6);
});