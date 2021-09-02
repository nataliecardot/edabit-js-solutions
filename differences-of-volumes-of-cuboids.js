// Difference of Volumes of Cuboids
// https://edabit.com/challenge/2v2FPyt9bhkLm4st6

// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

function findDifference(a, b) {
  let aVol = a.reduce((acc, curr) => acc * curr);
  let bVol = b.reduce((acc, curr) => acc * curr);
  return Math.abs(aVol - bVol);
}

// reduce: If initialValue is not specified (the case here), previousValue/acc is initialized
// to the first value in the array, and currentValue/curr is initialized to
// the second value in the array.

// Volume of a cube is length x width x height. It doesn't matter what order you multiply these together. You will get the same answer regardless of the order. Also, the terms length, width, and height are just words to help you remember the formula. It doesn't matter which side is which.
