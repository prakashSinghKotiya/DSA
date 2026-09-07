
// 2677. Chunk Array
// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
// The length of the last subarray may be less than size if arr.length is not evenly divisible by size.


// Example

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.


// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.


var chunk = function(arr, size) {
    let a = []
    for(let i = 0 ; i<arr.length ; i += size){
        
        a.push(arr.slice(i , i + size))
    }

    return a
    
};
