// merge sort follow divide and conquer approach , means its first break down the array into smaller array by doing n/2
// till the time they will be 1 element then it will merge them together and sort the array and return the sorted array

// in merge sort 2 things are there one is diving the array into multiple part and then merge this array into single sorted array

//eg: fn sort (arr){
//if( arr.length <= 1) return arr  , base condition if the array became 1 element then it will return that element 

// const mid = Math.floor(arr.length / 2)
// const left = Sort(arr.slice(0,mid))
// cosnt right = sort (arr.slice(mid))

// return mergesort (left , right)  , the fucntion responsible for merging in sorted manner this is kind of sorting two array
// }

//fn mergesort()  // here we will do the sorting fn by two pointer and return the merge array 


//912. Sort an Array


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1){
        return nums
    }
    let mid = Math.floor(nums.length/2)
    let left = sortArray(nums.slice(0,mid))
    let right =sortArray(nums.slice(mid))  // this will got to mid to arr.length
    return mergearray(left , right)
};

function mergearray (left , right ){
    const arr = []
    let l = 0 
    let r = 0

    while(l < left.length &&  r < right.length){
        if(left [l] < right[r]){
            arr.push(left[l])
            l++
        } else{
         arr.push(right[r])
            r++ }
    }
return [...arr, ...left.slice(l), ...right.slice(r)]
}