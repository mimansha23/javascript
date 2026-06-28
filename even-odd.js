function findOddNumbers(start, end) {
 const odds = [];
 // Ensure correct order regardless of input
 const min = Math.min(start, end);
 const max = Math.max(start, end);
 for (let i = min; i <= max; i++) {
   if (i % 2 !== 0) { // Check if odd
     odds.push(i);
   }
 }
 return odds;
}
console.log(findOddNumbers(3, 15));
// Output: [3, 5, 7, 9, 11, 13, 15]
