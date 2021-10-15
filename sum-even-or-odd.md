# Even or Odd?

https://edabit.com/challenge/9mKB2XJJ9gYgjms4Z

## Instructions

Given an array of integers, determine whether the sum of its elements is even or odd.

The return value should be a string ("odd" or "even").

If the input array is empty, consider it as an array with a zero ([0]).

## Solution

```javascript
function evenOrOdd(arr) {
  if (!arr.length) return 'even';
  // This also works because empty array is loosely equated to empty string
  // if (arr == '') return 'even';
  let sum = arr.reduce((prev, curr) => prev + curr);
  return sum % 2 === 0 ? 'even' : 'odd';
}
```
