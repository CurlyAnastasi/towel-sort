module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  } else {
    matrix.forEach((item, index) => {
      index = index + 1;
      return index % 2 == 0 ? item.reverse() : item;
    })
    return matrix.reduce((prev, current) => prev.concat(current), [])
  }
}
