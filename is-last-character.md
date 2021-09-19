# Is the Last Character an "N"?

https://edabit.com/challenge/iiSAic33n4wGufQmG

## Instructions

Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

## Solution

```javascript
function isLastCharacterN(word) {
  return word.substring(word.length - 1).includes('n');
}
```

## Additional Notes

The `substring()` method returns the part of the string between the start and end indexes (end not included), or to the end of the string when the end index is omitted.

When used on a string, the `length` property will give you the number of characters used in the string, but strings (like arrays) are zero indexed, so the last character in the string will have an index of `length - 1`.

For example, 'frog' has a length of 4 characters, and the indices of each letter are: `0, 1, 2, 3`.
