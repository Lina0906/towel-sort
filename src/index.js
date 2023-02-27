
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length) {
    const resultArr = [];

    for (let i = 0; i < matrix.length; i++) {
      const preparedArr = i % 2 === 0 ? matrix[i] : matrix[i].reverse();  
      for (let j = 0; j < matrix[i].length; j++) {
        resultArr.push(preparedArr[j]);
      }
    }
  
    return resultArr;
  } else return [];
 
}
