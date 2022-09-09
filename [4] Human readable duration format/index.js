const Unit = new Map([
  [0, 60],
  [1, 60],
  [2, 24],
  [3, 365]
]);

function timeParts(units, res = []) {
  if (units === 0 || res.length === Unit.size) {
    return [...res, units];
  }
  const divider = Unit.get(res.length);
  return timeParts(Math.floor(units / divider), [...res, units % divider]);
}

function formatDuration(seconds) {
  const parts = timeParts(seconds);
  const readable = ['second', 'minute', 'hour', 'day', 'year'].reduce((res, unit, index) => {
    if (parts.length > index) {
      const value = parts[index];
      if (value > 0) {
        res.push(`${value} ${unit}${value > 1 ? 's' : ''}`);
      }
    }
    return res;
  }, []).reverse();
  return readable.length > 0
    ? [
      readable.slice(0, readable.length - 1).join(', '),
      readable.slice(readable.length - 1)
    ]
      .filter(Boolean)
      .join(' and ')
    : 'now';
}

console.log(formatDuration(100000000));
