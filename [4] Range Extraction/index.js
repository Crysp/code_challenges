function solution(list) {
  let res = [];
  let range = [];
  for (let i = 0; i <= list.length; i++) {
    if (range[range.length - 1] + 1 === list[i]) {
      range.push(list[i]);
    } else {
      if (range.length > 2) {
        res.push(range[0] + '-' + range[range.length - 1]);
      } else {
        res = res.concat(range);
      }
      range = [list[i]];
    }
  }
  return res.join(',');
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
