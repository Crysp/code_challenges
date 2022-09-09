function incrementString (str) {
  if (!str) {
    return '1';
  }
  return str.replace(/(0*)(\d+|.)$/, (_, zeros, match) => {
    let candidate = parseInt(match);
    if (Number.isInteger(candidate)) {
      const num = candidate + 1;
      return zeros.slice(num.toString().length - match.length) + num;
    }
    return match + 1;
  });
}

console.log(incrementString('foo'));
console.log(incrementString('foobar23'));
console.log(incrementString('foo0042'));
console.log(incrementString('foo9'));
console.log(incrementString('foo099'));
console.log(incrementString(''));
