
timecomplexity : Time complexity measures how efficient an algorithm is as the input size increases.
 It’s not the same as the actual time taken to run a program.


1- O(logn ) - this means when an alogrithm is dividing things by half its time complexity will be logn , eg binary search 


2- O(n) - This means the work increases directly with the number of elements.
            If the input doubles, the work also doubles.  it will go though every elemnt present and check 
            eg - linear search .

3-o(n square) - means in a loop inside loop a 0(n) is running then it will 0(n sqaure )

3- o(n logn)- this means inside a  0(n)  loop a o(logn) is running  eg inside a linear loop one binary search loop is  running 

5- o(n ^3 )- tripple nested loop 

6- o(2n)- two differeent independent linear loop  


** when we run loop inside loop it get multiplied and the time c become n sq , n cube etc 
** but when we run loop independently it gets add and the time c becomome n + n + n = 3n or 2n or 4 n which is ~ to 0(N)