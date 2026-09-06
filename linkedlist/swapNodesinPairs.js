// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head. 
// You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
// Input: head = [1,2,3,4]  Output: [2,1,4,3]

//logic : (iterative approach : creating a dummy node (sentinal node) using 3 pointer prev cur and current.next 
// swapping the prev.next with cur.next and cur.next with cur.next.next and then pointing cur.next pointer to cur . make sure 
// the main logic is  of pointing to node and swapping the nodes that is happeniing here , and then iterating the loop by changing 
// the pointers position..)

//(reccursive approach : calling function recuursively and passing the head.next.next.next(r.next) value that is pointing to
//  head.next(l) and then pointing the r to l (head.next.next(r) to head.next (curr)) and the nodes are getting swapped )

//reccursive approach :
var swapPairs = function(head) {
    if(!head || !head.next ) return head
    let l = head
    let r = head.next
    l.next = swapPairs(r.next)
     r.next = l
     return r
   
};




//iterative approach
var swapPairs = function(head) {
    if(!head || !head.next) return head
    let prev = new ListNode()
    prev.next = head

    let cur = head
    let d = prev
    let curnext = head.next
    while(cur && curnext){
        d.next = curnext
        cur.next = curnext.next
        curnext.next = cur
        

        d = cur
        cur =  d.next
        curnext = cur && cur.next
    }
    return prev.next
};