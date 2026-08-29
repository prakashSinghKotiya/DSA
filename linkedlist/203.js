//Given the head of a linked list and an integer val, remove all the nodes of the linked list
//  that has Node.val == val, and return the new head.

// here we creating a new node and linking it with the head of the linkedlist and that using a prev pointer 
// we are llooping  andd if  value  match we delted the node by unlinking the node 

var removeElements = function(head, val) {
    let n = new ListNode(0)
    n.next = head 
    let prev = n
    while (prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next
        }else {
            prev = prev.next
        }
        
    }
    return n.next
    
};