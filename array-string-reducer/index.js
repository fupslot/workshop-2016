const stringReducer = (init, val) => {
  if (init.indexOf(val) < 0) {
    init.push(val);
  }
  return init;
};

const stringSort = (a, b) => {
  return a.localeCompare(b);
};

module.exports = (str) => {
  const arr = str.split('');
  const reduced = arr.reduce(stringReducer, []);
  return reduced.sort(stringSort).join(' ');
};
