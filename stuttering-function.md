# Stuttering Function

https://edabit.com/challenge/3QHfHxp3WkuQsMLXd

## Instructions

Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

## Solution

```javascript
function stutter(word) {
  let first = word.substr(0, 2);
  return `${first}... ${first}... ${word}?`;
}
```

Alternative:

```javascript
function stutter(word) {
  let repeat = word.slice(0, 2) + '... ';
  // let repeat = `${word.slice(0, 2)}... `
  return repeat + repeat.concat(word) + '?';
}
```

## Additional Notes
