
//find thee factorial using recursion factorial is !5 = 5*4*3*2*1 = 120

function multiply (n){
    if(n == 0 ) return 1

   const ans = n * multiply(n-1) 
   console.log(ans)
   return ans
}

multiply(5)