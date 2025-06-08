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
