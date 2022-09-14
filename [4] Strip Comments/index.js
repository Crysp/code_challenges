function solution(input, markers) {
  return input.replace(new RegExp(` ?[${markers.join('|')}].*`, 'g'), '');
}

console.log(solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']));
