function add(...args) {
  return Object.assign(
    add.bind(null, ...args),
    {
      valueOf: () => args.reduce((sum, arg) => sum + arg),
    },
  );
}

const addTwo = add(2);
const res = addTwo + 5;

console.log(res);
console.log(+add(1));
