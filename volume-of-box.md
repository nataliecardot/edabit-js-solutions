# Volume of a Box

https://edabit.com/challenge/ms3q5GYSpFpwxeFWX

## Instructions

Create a function that takes an object argument `sizes` (contains `width`, `length`, `height` keys) and returns the volume of the box.

## Solution

```javascript
function volumeOfBox(sizes) {
  let total = 1;
  for (x in sizes) {
    total *= sizes[x];
  }
  return total;
}
```

Alternative:

```javascript
function volumeOfBox(sizes) {
  // See https://www.javascripttutorial.net/es-next/javascript-object-values/
  return Object.values(sizes).reduce((a, b) => a * b);
}
```

## Additional Notes

Volume is length _ width _ height.
