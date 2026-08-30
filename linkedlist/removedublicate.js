// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
//  Return the linked list sorted as well.


//logic : using a current node and checking its value with next as its a sorted and if value == delete the link.
// we are only moving the current node if its value is not equal to next value and that is how if list is [1112 ] is also 
// getting deleted and giving perfect result and the second chek when the current .next reach index 2 of this list [1112] the 
//cuurent is still at index 1 it didnt moved its only moving when its value is !== next value
var deleteDuplicates = function(head) {


    let curr = head

    while(curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next   // moving the next pointer not current .

        } else{  
        curr = curr.next
        }
       
    }

    return head
    
};