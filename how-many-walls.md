# I'd Like a New Shade of Blue, Please

https://edabit.com/challenge/2rjHtbg32PrtZdF66

## Instructions

I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

n is the number of square meters I can paint.

w and h are the widths and heights of a single wall in meters.

## Solution

```javascript
function howManyWalls(n, w, h) {
  return Math.floor(n / (w * h));
}
```
