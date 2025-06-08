 const arr = [1, 2, 3, 4, 1, 0, 2, 2];

 const divide = (arr, n) => {
   // Write your code here
  let result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // If adding the current element doesn't exceed n
    if (currentSum + arr[i] <= n) {
      currentSubarray.push(arr[i]);
      currentSum += arr[i];
    } else {
      // Push the current subarray and start a new one
      if (currentSubarray.length > 0) {
        result.push(currentSubarray);
      }
      currentSubarray = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Add the last subarray if it exists
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;

  };

 const n = prompt("Enter n: ");
 alert(JSON.stringify(divide(arr, n)));





//My Explaination
//divide([1, 2, 3, 4, 1, 0, 2, 2], 5)

// result = []
// currentSubarray = []
// currentSum = 0

// Step 1: element = 1
// currentSum + 1 = 0 + 1 = 1 → ≤ 5 True

// Add 1 to currentSubarray: [1]

// Update currentSum: 1

// Step 2: element = 2
// currentSum + 2 = 1 + 2 = 3 → ≤ 5 True

// Add 2 to currentSubarray: [1, 2]

// Update currentSum: 3

// Step 3: element = 3
// currentSum + 3 = 3 + 3 = 6 → False, Too much

// Push [1, 2] to result: [[1, 2]]

// Start new currentSubarray: [3]

// Set currentSum = 3

// Step 4: element = 4
// currentSum + 4 = 3 + 4 = 7 → False, Too much

// Push [3] to result: [[1, 2], [3]]

// Start new currentSubarray: [4]

// Set currentSum = 4

// Step 5: element = 1
// currentSum + 1 = 4 + 1 = 5 → True

// Add 1 to currentSubarray: [4, 1]

// Update currentSum = 5

// Step 6: element = 0
// currentSum + 0 = 5 + 0 = 5 → True

// Add 0 to currentSubarray: [4, 1, 0]

// currentSum = 5

// Step 7: element = 2
// currentSum + 2 = 5 + 2 = 7 → False, Too much

// Push [4, 1, 0] to result: [[1, 2], [3], [4, 1, 0]]

// Start new currentSubarray: [2]

// Set currentSum = 2

// Step 8: element = 2
// currentSum + 2 = 2 + 2 = 4 → True

// Add 2 to currentSubarray: [2, 2]

// currentSum = 4

//  End of Loop
// Final currentSubarray = [2, 2] → push to result













