// Add up the Numbers from a Single Number
// https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
  let arr = [];
  for (let x = 1; x <= num; x++) {
    arr.push(x);
  }
  // prevValue, currValue
  return arr.reduce((a, b) => a + b);
}
