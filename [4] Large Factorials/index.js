function sum(a, b) {
  let _a = a.slice().reverse();
  let _b = b.slice();
  let index = 0;
  let memo = [];
  while (_b.length || memo.length || index < _a.length) {
    if (index < _a.length) {
      const sum = numberToArray(_a[index] + (_b.pop() || 0) + (memo.pop() || 0));
      _a[index] = sum.pop();
      if (sum.length > 0) {
        memo = sum;
      }
      index++;
    } else {
      _a = _a.concat(memo);
      memo = [];
    }
  }
  return _a.reverse();
}

function multiply(a, b) {
  let res = a.slice();
  while (b !== 1) {
    res = sum(res, a);
    b--;
  }
  return res;
}

function numberToArray(n) {
  return n.toString().split('').map(Number);
}

function factorialArray(n) {
  if (!n) {
    return [1];
  }
  return multiply(factorialArray(n - 1), n);
}

function factorial(n) {
  return factorialArray(n).join('');
}

console.log(factorial(172));
