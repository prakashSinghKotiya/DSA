//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the 
// signed 32-bit integer range
//  [-231, 231 - 1], then return 0.


// here for finding the range / limit we will use MATH.POW(digit,power ) math.pow find the power of a number


var reverse = function(x) {

    const  copy = x
    x = Math.abs(x) // IF THE passed integer is -ve we are making it postive first 

    let rev = 0 

    while(x >0){
        let ld =  x % 10 
        rev = (10 * rev)+ ld
         x = Math.floor( x / 10)


    }
    let limit = Math.pow (2,31)
    if(rev < -limit || rev > limit  ){ return 0} 
       
    return (copy < 0)? -rev : rev  // here we retuning while checking the orginal number was -ve or not if -ve send -ve reverse 
    
};