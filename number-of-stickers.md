# Number of Stickers

https://edabit.com/challenge/4afZPJkfREMhcjNsb

## Instructions

Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.

## Solution

```javascript
function howManyStickers(n) {
  return 6 * n ** 2;
}
```

## Additional Notes

You need to find the surface area of a cube - the equation for that is 6a^2 where a is the length of the side of each edge of the cube. This translates to the number of square stickers that fit on the cube because area is the number of squares that would be used to cover the inside of a shape (and we are finding the total number of square stickers that can fit on all 6 faces).
