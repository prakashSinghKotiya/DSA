// Return true if there is a cycle in the linked list. Otherwise, return false.

 
//logic we using set() and Set is a built-in JavaScript object that stores unique values.
//  This means duplicate values are automatically ignored.
// we will check the value before insierting inside set if its there then it is a cycle otherwise it is not


var hasCycle = function(head) {
    const cycle = new Set()
    let current = head 

    while(current!= null){
        if(cycle.has(current) ){
            return true
        }
        cycle.add(current)
        current = current.next 

    }
    return false 
};
// this  taking o(n) tc and o(n) sc 


//BETTER APPROACH 

//SLOW AND FAST POINTER APPROACH ( FLOYD'S CYCLE DETECTION ALGORITHM)
var hasCycle = function(head) {
    
    if(!head ) return false 
    let slow = head
    let fast = head.next

    while(fast != slow){   // IF THEY MEET THEN THERE IS A CYCLE

        if(fast === null || fast.next === null ){ // if  null is there then there is no cycle
            return false 
        }
        slow = slow.next    // slow pointer is moving 1 step at a time
        fast = fast.next.next   //fast pointer is moving 2 steps at a time
        
    }
    return true 
    
};


// now here the space complexity is 0(1) and 0(n ) timecomplexity