//write a fn that returnn the count of digits in a number 

//logic is simple any no divided by 10 will give its digit count 


function count (n){
    let count = 0 
    if (n === 0) {
        return 1
    }
     n = Math.abs(n)  // math.abs convert the negetaive no to  positive 
    while (n > 0){

        n = Math.floor(n/10) // this is the main logic to count the digits in a number 
        
        count++

    }
    return count 
}

let  num = -4832

const result = count(num)   
console.log(result)


//math.floor gives the ground no 
//math.ceil gives the upper no 
//math.round give the nearest no if <5 = ground , if >5 upper 