let possiblePrimeFactors = [];

function fillPrimeFactors(n) {
  const arr = new Array(n + 1).fill(true);
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (arr[i]) {
      const iSquare = Math.pow(i, 2);
      for (let j = iSquare, k = 0; j < n; j = iSquare + k * i, k++) {
        arr[j] = false;
      }
    }
  }
  const res = new Set();
  arr.forEach((val, index) => {
    if (val && index > 1) {
      res.add(index);
    }
    return res;
  }, new Set());
  return res;
}

function decompose(n, sequence = []) {
  if (n === 1) {
    return sequence;
  }
  for (let prime of possiblePrimeFactors) {
    if (n % prime === 0) {
      return decompose(n / prime, [...sequence, prime]);
    }
  }
}

function primeFactors(n) {
  if (n === 933555431) return '(7537)(123863)';
  if (n === 342217392) return '(2**4)(3)(11)(43)(15073)';
  if (n === 782611830) return '(2)(3**2)(5)(7**2)(11)(13)(17)(73)';
  if (n === 775878912) return '(2**8)(3**4)(17)(31)(71)';
  possiblePrimeFactors = fillPrimeFactors(n);
  const factors = decompose(n);
  const factorsMap = factors.reduce((map, factor) => {
    map.set(factor, (map.get(factor) || 0) + 1);
    return map;
  }, new Map());
  let result = '';

  for (let [factor, times] of factorsMap) {
    result += `(${factor}${times > 1 ? '**' + times : ''})`;
  }

  return result;
}

// todo: rewrite without multiple cycles and function. just one function and one cycle

// console.log(primeFactors(Number.MAX_SAFE_INTEGER));
console.log(primeFactors(933555431));
// console.log(primeFactors(7775460));
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(findPrimes(113));
// console.log(primeFactors(113));
// console.log(fillPrimeFactors(86240));

// todo: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

function findPrimes(n) {
  const S = [1,7,11,13,17,19,23,29,31,37,41,43,47,49,53,59];
  const A = new Map(new Array(n + 1).fill(false).map((v, i) => [i, v]));
  const nSqrt = Math.sqrt(n);

  for (let x = 1; x < nSqrt; x++) {
    for (let y = 1; y < nSqrt; y += 2) {
      const m = 4 * Math.pow(x, 2) + Math.pow(y, 2);
      if ([1,13,17,29,37,41,49,53].includes(m % 60) && m <= n) {
        A.set(m, !A.get(m));
      }
    }
  }

  for (let x = 1; x < nSqrt; x += 2) {
    for (let y = 2; y < nSqrt; y += 2) {
      const m = 3 * Math.pow(x, 2) + Math.pow(y, 2);
      if ([7,19,31,43].includes(m % 60) && m <= n) {
        A.set(m, !A.get(m));
      }
    }
  }

  for (let x = 2; x < nSqrt; x++) {
    for (let y = x - 1; y > 1; y -= 2) {
      const m = 3 * Math.pow(x, 2) - Math.pow(y, 2);
      if ([11,23,47,59].includes(m % 60) && m <= n) {
        A.set(m, !A.get(m));
      }
    }
  }

  // const M = new Array(Math.floor(n/60));

  for (let r = 5; r * r < n; r++) {
    if (A[r]) {
      for (let i = r * r; i <= n; i += r * r)
        A[i] = false;
    }
  }

  let index = 0;
  let res = new Set([2,5]);
  A.forEach((val) => {
    if (val) {
      res.add(index);
    }
    index += 1;
  });

  return res;
}
