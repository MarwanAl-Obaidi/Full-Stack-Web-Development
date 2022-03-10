

function sum(a, b) {
  total = a + b;

  return "The total is " + total;
}

function multiply(a, b) {
  a * b;
  return;
}

/* ======= TESTS  ===== */

function test(test_name, expr) {
    let status;
    if (expr) {
        status = "PASSED"
    } else {
        status = "FAILED"
    }

    console.log(`${test_name}: ${status}`)
}

test("Testing sum(): - case 1", sum(23,5) === "The total is 28")
test("Testing sum(): - case 2", sum(3,5) === "The total is 8")
test("Testing multiply(): - case 1", multiply(3,5) === "The total is 15")
test("Testing multiply(): - case 2", multiply(2,5) === "The total is 10")