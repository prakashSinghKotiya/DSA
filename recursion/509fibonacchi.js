//fibonacci series using recursion 
// fibonacci series is a series of numbers where each number is the sum of the last  two numbers,
//  usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.
//logic is simple in fibonachi last 2 digit sum is the curent digit so this formuly f(n-1) + f(n-2) is used here 
//and this is creating a 2 branch of tree 

var fib = function(n) {
    if(n <= 1) return n 

    return fib(n-1) + fib(n-2)
    
};