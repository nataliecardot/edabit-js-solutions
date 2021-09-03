# Add Up the Numbers from a Single Number

https://edabit.com/challenge/4gzDuDkompAqujpRi

## Instructions

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

## Solution

```javascript
function addUp(num) {
  let arr = [];
  for (let x = 1; x <= num; x++) {
    arr.push(x);
  }
  // prevValue, currValue
  return arr.reduce((a, b) => a + b);
}
```
