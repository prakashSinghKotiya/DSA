//27. Remove Element 

// again here we will use 2 pointer  approach  x is responsibe for the swapping
// when we are shifting the var to the next index we are dublicating the value to that index not deleting it 



var removeElement = function(nums, val) {
    
    let a = 0

    for(i = 0 ; i<nums.length ; i++) {
        if ( nums[i] != val ){
           
            nums[a] = nums[i]
            a =  a + 1
            
            

        } 
         
    }
    return a
};