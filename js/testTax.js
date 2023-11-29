import Tax from "./Tax.js";
//Below are the test cases for ontario tax
QUnit.test("Ontario Tax calculation for income less than $40922", function (assert) {
    const onTax = new Tax();
    var tax = onTax.cal(20000, 200);
    assert.equal(tax[0], "1010.00", "Expected correct value as 1010.00 in Ontario Tax");
});

QUnit.test("Ontario Tax calculation for income between $81847 and $40922)", function (assert) {
    const onTax = new Tax();
    var tax = onTax.cal(50000, 5000);
    assert.equal(tax[0], "2897.64", "Expected correct value as 2897.64 in Ontario Tax");
});

QUnit.test("Ontario Tax calculation for income between $150000 and $81847", function (assert) {
    const onTax = new Tax();
    var tax = onTax.cal(110000, 7000);
    assert.equal(tax[0], "8952.87", "Expected correct value as 8952.87 in Ontario Tax");
});

QUnit.test("Ontario Tax calculation for income between $220000 and $150000", function (assert) {
    const onTax = new Tax();
    var tax = onTax.cal(175000, 10000);
    assert.equal(tax[0], "16457.00", "Expected correct value as 16457.00 in Ontario Tax");
});

QUnit.test("Ontario Tax calculation for income greater than $220000", function (assert) {
    const onTax = new Tax();
    var tax = onTax.cal(225000, 50000);
    assert.equal(tax[0], "22587.00", "Expected correct value as 22587.00 in Ontario Tax");
});
//Below are the test cases for federal tax
QUnit.test("Federal Tax calculation for income less than $40922", function (assert) {
    const fTax = new Tax();
    var tax = fTax.cal(20000, 200);
    assert.equal(tax[1], "3000.00", "Expected correct value as 3000.00 in Federal Tax");
});

QUnit.test("Federal Tax calculation for income between $81847 and $40922)", function (assert) {
    const fTax = new Tax();
    var tax = fTax.cal(50000, 5000);
    assert.equal(tax[1], "7759.19", "Expected correct value as 7759.19 in Federal Tax");
});

QUnit.test("Federal Tax calculation for income between $150000 and $81847", function (assert) {
    const fTax = new Tax();
    var tax = fTax.cal(110000, 7000);
    assert.equal(tax[1], "21128.62", "Expected correct value as 21128.62 in Federal Tax");
});

QUnit.test("Federal Tax calculation for income between $220000 and $150000", function (assert) {
    const fTax = new Tax();
    var tax = fTax.cal(175075, 10000);
    assert.equal(tax[1], "39088.23", "Expected correct value as 39088.23 in Federal Tax");
});

QUnit.test("Federal Tax calculation for income greater than $220000", function (assert) {
    const fTax = new Tax();
    var tax = fTax.cal(225000, 50000);
    assert.equal(tax[1], "54567.00", "Expected correct value as 54567.00 in Federal Tax");
});
