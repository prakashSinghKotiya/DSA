//Example 1 input: x = 123  Output: 321

var reverse = function(x) {

    const  copy = x
    x = Math.abs(x) // return the postive no
    let rev = 0

    while(x >0){
        let ld =  x % 10 
        rev = (10 * rev)+ ld
         x = Math.floor( x / 10)


    }

    let limit = Math.pow (2,31)
    if(rev < -limit || rev > limit  ){ return 0}
       
    return (copy < 0)? -rev : rev 
    
};