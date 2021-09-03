# Reverse and Capitalize

https://edabit.com/challenge/nBW6ubsQCurPvhpWc

## Instructions

Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

## Solution

```javascript
function reverseCapitalize(str) {
  return str.toUpperCase().split('').reverse().join('');
}
```

## Additional Notes

1. uppercase
2. split into array of single letters (substrings) ('')
3. reverse the array (no method to reverse a string)
4. join array elems into string with join() (default separator for join()
   is a comma - use join('') to join elems w/o separator)

Alternative method:
https://www.samanthaming.com/tidbits/12-split-string-using-spread/

```javascript
function reverseCapitalize(str) {
  return [...str].reverse().join('').toUpperCase();
}
```
