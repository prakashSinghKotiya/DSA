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