
//binary searcch always works on sorted array
//logic - we are using  pointer approach , one is left and another one is right , and one is the middle
//if the target is > mid than search in righ side of the array and if the target is < mid than search in left side of the array

var search = function(nums, target) {
    
    let l = 0 
    let r = nums.length -1

    for(let i = 0 ; r >= l ; i++){
        let mid = Math.floor((l + r ) /2)

    
        if(target === nums[mid]){
            return mid
        } 
        else if(target > nums[mid] ){
            l = mid + 1
        }
        else{
            r = mid -1
        }
    }

    return -1
};