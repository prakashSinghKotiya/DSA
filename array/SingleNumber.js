//Given a non-empty array of integers nums, every element appears twice except for one.
//  Find that single one.

//logic : creating a hash map and inserting each value ie "i" of array as key and 1
// as a inital value and if that "i " value came again we are just increasing the value++
//and lastly we are looping once again to fin the hash value ==1 and returning it 

var singleNumber = function(nums) {
    const hash = {}
    
    for( i=0 ; i<nums.length ; i++){
        if( !hash[nums[i]] ){
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++ 
        }

    }

    for(i=0 ; i<nums.length ; i++){
        if( hash[nums[i]] == 1 ){
            return nums[i]

        }
        

    }
    
};



//another way of solving it is using XOR , xor eg 1 xor 1 = 0 , 1 xor 0 = 1

var singleNumber = function(nums) {
    let xor = 0
    for(i = 0 ; i<nums.length ; i++){

        xor = xor ^ nums[i]  // to use xor in js we use ^

    }

    return xor 

 
    
};