const minus = require('./minus');

//1
test('6 - 7 จะได้เท่ากับ -1', ()=>
{
    expect(minus(6,7)).toBe(-1);
});

//2
test('52 - 52 เท่ากับ 0', ()=>
{
    expect(minus(52,52)).toBe(0);
})

//3
test('18 - 0 เท่ากับ 18', ()=>
{
    expect(minus(18,0)).toBe(18);
});

//4
test('31 - 11 เท่ากับ 20', ()=>
{
    expect(minus(31,11)).toBe(20);
});

//5
test('88 - 77 = 10', ()=>
{
    expect(minus(88,77)).toBe(11);
});
