// palindrome is a word or phrase that reads the same backward as forward, such as madam or racecar.

// things to know before solving palindromes 
// n % 10 will give the last digit ie remainder
// n / 10 will remove the last digit from the number 
// to store reverse we have to do (10 * reverse) + lastdigit


//logic 
// find the last digit using %  , save it using (10 * reverse) + lastdigit in a variable 
// remove th last digit from the main n using /10 
// keep the loop until n>o
// check if the reverse is equal to the original number or not


var isPalindrome = function(x) {
    if (x < 0 ){ return false }
    let copy = x
    let output = 0
  
    
    while (x>0){
        let rem = x % 10 
        output = (10 * output)+ rem
         x = Math.floor( x / 10 )
    }
    return copy === output
    
};
