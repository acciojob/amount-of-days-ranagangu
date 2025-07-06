//your JS code here. If required.
function daysOfAYear(year) {
  if (year < 1 || year > 9999) {
    throw new Error("Year must be between 1 and 9999.");
  }
  
  // Check leap year condition
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}

// Example usage:
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366
