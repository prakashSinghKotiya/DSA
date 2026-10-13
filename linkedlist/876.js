
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

//approach :
//NOTE : we are here ffloowing the slow and fast pointer approach here one variable is  looping in 1x and annother in 2x
// and when the fast pointer reach the end then the slow pointer will be at the middle node and this is how we finding the mid
//head is the starting node means index 0 , and the last node ref is null so our condition is according to that .
var middleNode = function(head) {
   let slow = head 
   let fast = head 
   while (fast != null && fast.next != null){
    slow = slow.next 
    fast = fast.next.next   
   }

   return slow  // it is asking for node not the value if it was value we could have done slow.value
    
};