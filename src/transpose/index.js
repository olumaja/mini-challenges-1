/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

  let myArr = Array.from(Array(array[0].length), () => new Array(array.length));
  myArr[0][0] = array[0][0];
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[0].length; j++){
      myArr[j][i] = array[i][j];
    }
  }

  console.log(myArr);
  return myArr;

}

module.exports = transpose;
