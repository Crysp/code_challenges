function topThreeWords(text) {
  const intensity = new Map();
  const matches = text.match(/([\w\-']{2,}|\w+)/gm) || [];

  for (const word of matches) {
    const lowerWord = word.toLowerCase();
    if (intensity.has(lowerWord)) {
      intensity.set(lowerWord, intensity.get(lowerWord) + 1);
    } else {
      intensity.set(lowerWord, 1);
    }
  }

  return [...intensity].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([word]) => word);
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to " +
  "mind, there lived not long since one of those gentlemen that keep a lance " +
  "in the lance-rack, an old buckler, a lean hack, and a greyhound for " +
  "coursing. An olla of rather more beef than mutton, a salad on most " +
  "nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra " +
  "on Sundays, made away with three-quarters of his income."));
