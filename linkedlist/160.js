// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
//  If the two linked lists have no intersection at all, return null.


//logic create a hash set of one ll and than find if that node is present in that hash set  , using hash set will be faster 
// and the time complexity will be O(n) 

var getIntersectionNode = function(headA, headB) {
    const hash  = new Set()
   
    while(headB){
        hash.add(headB)
        headB = headB.next
    }

     while(headA){
       if(hash.has(headA)){ 
        return headA
       }
        
        headA = headA.next
    }
    return null

    
};