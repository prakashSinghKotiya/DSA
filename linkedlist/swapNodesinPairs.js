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