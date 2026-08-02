// recrursion is fn inside a  funtion with a base case and a recursive case
// base case is the condition where the recursion stops and recursive case is the condition where the recursion continues


//sum of n numbers using recursion 
//formulla is n = n +  sum(n-1)  , where n is the number and sum(n-1) is the recursive case
// and base case will be if n = 0 then return 0


function  sum(n){
if(n==0) return 0 

return n + sum(n-1)



}

sum(5)  // 15    how ?? here it is - sum (5 ) = 5 + sum(4) see here sum (4 ) is callled again and this recursive loop will
         // conntinue till its no sum(0 ) and then base case will stop the recurrsion and we will get out result ie 15 