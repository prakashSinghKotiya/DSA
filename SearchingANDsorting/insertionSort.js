// here in insertion sort we will take the first element as sorted and then we will take the next elemnt as current and previous
// as cuurent -1 and run the loop from index 1 ie current and check  if current is < than prev then we will swap them
//and we keep  running the loop until we get the sorted array


function insertionSort(arr) {
    console.log("running")
    for ( let i = 1; i < arr.length; i++) { 
       let current = arr[i]
       let prev = i - 1

       while(arr[current ] < arr[prev] && prev >= 0) {
        arr[prev + 1 ] = arr[prev]

        prev --

       }
       arr[prev + 1 ] =  current

    }
    console.log(arr)
    return arr
}


let one = [2,1,4,3,5]

console.log(insertionSort(one))