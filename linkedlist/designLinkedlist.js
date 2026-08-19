function node (val){    // when we will call new node(val)  this will create a new node in linked list 
    this.val = val 
    this.next = null
}

let Linkedlist = function  (val){  // creation of linkedlist
    this.head = null   // linkedlist is represented by head 
    this.size = 0   // initially size is 0 but whenever we add on node we will do this.size++

}


Linkedlist.prototype.addatHead = function (val ){    // adding as prototype means this fn is now the property of Linkedlist 
    const head  = new node(val)
    head.next = this.head
    this.head = head
    this.size++


}

//eg : const list = new Linkedlist() creating new linkedlist  , 
// list.addatHead(1) now we can do this cuz addatHead is now a property of Linkedlist otherwise we had to initialize a fn of add at head 


Linkedlist.prototype.addatTail = function (val ){   
    const newtail  = new node(val)

    if(this.head == null){ // means the likedlist is empty 
        this.head = newtail // means we adding first element in it 
        this.size++
        return

    }

    let current = this.head 
    while(this.next != null){  // finding the last elemnt ie the tail how ? if the next elemnt is null then it is the last element

        current = current.next 
        
    }
    current.next = newtail  
    //newtail.next = null no need to do this as we are already doing this in constructor
    this.size++


}

Linkedlist.prototype.addatIndex = function (index ,val ){   
    const newIndex  = new node(val)

    if(index == 0){ // checking corner cases
        this.addatTail(val)
        return

    }else if( index == this.size){ // checking corner cases
        this.addatTail(val)
        return
    } // means the likedlist is empty
    else{

    let current = this.head  // head is the first node ie  the index 0 automatically 
    while(current < index - 1){
        cuurent = current.next 
             }  

         newIndex  = current.next
         current.next = newIndex
         this.size++

        
    }
   
    
}



Linkedlist.prototype.get = function (index  ){    // to  get the value at index
   

    if(index == 0 || inde > this.size){ // checking corner cases
      
        return -1

    }
    else{

    let current = this.head  // head is the first node ie  the index 0 automatically 
    for(i = 0 ; i < index ; i++){
        current = current.next 
             }  

        return current.value // this will return the value, if we want to return the node we would had just wriiten current

        
    }
   
    
}
