// exercice 2.1 LinkedLists.js //
/*
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

import {Node} from "./../LinkedLists"

// pseudo code 
/* 
-delete node which are the same
- 1 idea : compare each node with a loop and a buffer
- complexity : n²
- 2 idea : 

*/
// cas limites
/* 
-linked list contains only the same Node => we should have only one element at the end
-...
*/ 

// algo 

function DeleteLinkedListDuplicate(head: Node): Node{
    let n:Node = head
    while(n.next != null){
        console.log(JSON.stringify(n.next));
        let buff:number = n.data
        let m:Node = n.next;
        while(m.next != null){
            if(buff == m.data){
                head.deleteAthisNode(buff)
            }
            m = m.next;
        } 
        n = n.next;
    }
    return head;
}

const test1 = new Node(1)
test1.appendToTail(2);
test1.appendToTail(2);
test1.appendToTail(3);
console.log(DeleteLinkedListDuplicate(test1));

export {DeleteLinkedListDuplicate} 