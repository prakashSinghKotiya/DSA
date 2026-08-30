// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.



//logic here we have to remove from end so first step always create a sentinal node , 
// second we are using two pointer one will start initially from the sentinal node  ie 0 and another one will start from 
// the nth position given , so when the first wills start looping from nth posi and reach the end the second pointer will reach
// ath the previous node of the node which we have to delete and then we will remove that node



//one pass approach better
var removeNthFromEnd = function(head, n) {
    let ref = new ListNode()
    ref.next = head 

    let second = ref
    let first = ref


    // finding looping postion for the first pointer 

    for(i= 0  ; i< n ; i++){
        first =  first.next 
    }

    //finding  the previous node of the elemnt which we have to delete and second will get that node
   
   while(first && first.next){
     second = second.next 
     first = first.next

   }

   // deleting the node 

   second.next = second.next.next

   return ref.next

    
};





// this is a two pass appproach means traverse the linked list twice

var removeNthFromEnd = function(head, n) {
    let ref = new ListNode()
    ref.next = head 

    let length = 0

     while(head){
        head = head.next
     length++

   }

   let previousposi = length - n
   let prev = ref

    for(i= 0  ; i< previousposi ; i++){
        prev = prev.next
    }


   // deleting the node 

   prev.next = prev.next.next

   return ref.next

    
};