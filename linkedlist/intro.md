* linked list is a linear data structre it store value in a chain like structure where the next value reference is store to its  previous node 

* the starting node is called head and the end node is called tail 
* eg : [value, reference to nextnode ] -> [value, reference to nextnode] -> [value, reference to nextnode] this is the eg of singly linked list   , A → B → C → D

* there are twp type of linked list 
 1> singly linked list where one node is divided into two and only the next node reference is stored in it 

 2> doubly linked list , where one node is divided into 3  and it store refence from both side next and before 
  eg : [ previous reference , value , next reference ] -> [ previous reference , value , next reference ] -> [ previous reference , value , next reference ]

   eg: null ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → null

* inserting value inside linkedlist is better than array 
* but finding value inside linkedlsit is not that good it take O(n ) time complexity where as array takes O(1)
