# Leap Year Function

https://edabit.com/challenge/wBYQnCytRFNxsL4Gr

## Instructions

Write a function that returns true if a year is a leap, otherwise return false.

A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month, creating February 29.

A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.

## Code

```javascript
function leapYear(year) {
  if (year % 100 !== 0) {
    // not beginning of century; in this case must be evenly divisible by 4
    return year % 4 === 0;
  } else {
    // beginning of century (evenly divisible by 100)
    // in this case must be evenly divisible by 400 to be a leap year
    return year % 400 === 0;
  }
}
```

## Additional Notes

1600 is a leap year since it's a first day of a century and evenly divisible by 400.

Leap years since 1900: 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020
