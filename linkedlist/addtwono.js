// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit.
//  Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


//logic: adding two no and  carry using / to get carry , using % to find last digit and adding directly last digit to new node 
// connecting that ndoe to the output node . 




var addTwoNumbers = function(l1, l2) {
    let op = new ListNode()
    let outputhead = op
    let carry = 0
    

    while( l1 || l2 || carry){
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry
         carry = Math.floor(sum/10) 
        let lastdigit = sum % 10 

        let x = new ListNode(lastdigit)
        op.next = x
        op = op.next

        l1 = l1 && l1.next 
        l2 = l2 && l2.next
        
    }
    
    return outputhead.next
    
};