# Array Indexing

https://edabit.com/challenge/ZZ82YaHmPZRewQNYH

## Instructions

Given an index and an array, return the value of the array with the given index.

## Solution

```javascript
function valueAt(arr, i) {
  return arr[Math.floor(i)];
}
```

## Additional Notes

Alternative solution:
`const valueAt = (arr, i) => arr[~~i];`

You can use the double bitwise NOT operator `(~~)` as an alternative to `Math.floor()` or to convert a floating point number to an integer.
