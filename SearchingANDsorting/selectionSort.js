//selection sort runs 2 loop amd swap the min elemnt to greater element and sort the array in ascending order
//eg [2,1,4,3,5] - her first we will run other loop from length -1 as last index will automatically sorted and 
//  set min and 0 index and run sec loop from i+1 index and check tthat index with min that is 
//i index that is 0 and if it is < than min we will swap and this is how all sorting will work


function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min  = 0 
         
        for(let j = i+1 ; j < arr.length ; j++) {
            if(arr[j] <  arr[min]){
                min = j
            
            }
        }
        let temp = arr[i]
         arr[i] = arr[min]
        arr[min] = temp
}

return arr
}