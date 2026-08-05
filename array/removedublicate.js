// q> 26. Remove Duplicates from Sorted Array

//logic - here we are ussing two pointer approach one is x  and another one is i 
// x is responsible for the index of the new array and the next index and i is responsible for the index of the original array
//  x is  holdiing the index no , so the real array length will be x +1 and so we are retuning it 

var removeDuplicates = function(nums) {
   
    let x = 0 ;
    for (i=0 ; i < nums.length ; i++) {
        if (nums[i] > nums[x]){ 
            x = x + 1 
            nums[x] = nums[i]
            
        }
       

    }
     return x+1
};