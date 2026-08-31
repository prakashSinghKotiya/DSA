// 328. Odd Even Linked List
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.


//logic : so here the value are akready in this order odd even and so on so we wil use  two pointer even and odd and keep their
// order even with even odd with odd by odd.next  = odd.next.next and even.next = even.next.next and will normally travel them 
// throughout the list and then connect them at the end 


var oddEvenList = function(head) {
    if(!head || !head.next) return head
    let odd = head 
    let even = head.next
    let evenstart = even

    while(odd.next && even.next){
        odd.next = odd.next.next  // odd list 
        even.next = even.next.next // even list

        odd = odd.next // next loop
        even= even.next //next loop
         
    }
    
    odd.next = evenstart // reconnect the odd list with the even list

    return head
};