const patterns = [
  /^\d0+$/,
  /^(\d)\1+$/,
  /^(?:1(?=2|$))?(?:2(?=3|$))?(?:3(?=4|$))?(?:4(?=5|$))?(?:5(?=6|$))?(?:6(?=7|$))?(?:7(?=8|$))?(?:8(?=9|$))?(?:9(?=0|$))?0?$/,
  /^(?:9(?=8|$))?(?:8(?=7|$))?(?:7(?=6|$))?(?:6(?=5|$))?(?:5(?=4|$))?(?:4(?=3|$))?(?:3(?=2|$))?(?:2(?=1|$))?(?:1(?=0|$))?0?$/,
  /^(\d)(?:(\d)(?:(\d)(?:(\d)(?:(\d)(?:(\d)(?:(\d)(?:(\d)(?:(\d)(?:(\d)(?:(\d)\11?\10|\10?)\9|\9?)\8|\8?)\7|\7?)\6|\6?)\5|\5?)\4|\4?)\3|\3?)\2|\2?))?\1$/,
];

function check(number) {
  return patterns.some((pattern) => pattern.test(number.toString()));
}

function isInteresting(number, awesomePhrases) {
  awesomePhrases.forEach((phrase) => {
    patterns.push(new RegExp(`^${phrase}$`));
  });

  if (number > 99 && check(number)) {
    return 2;
  }
  if ((number > 98 && check(number + 1)) || (number > 97 && check(number + 2))) {
    return 1;
  }
  return 0;
}

console.log(isInteresting(3, [1337, 256])); // 0
console.log(isInteresting(11208, [1337, 256])); // 0
console.log(isInteresting(11209, [])); // 1
console.log(isInteresting(11211, [])); // 2
console.log(isInteresting(1335, [1337, 256])); // 1
console.log(isInteresting(1337, [1337, 256])); // 2
