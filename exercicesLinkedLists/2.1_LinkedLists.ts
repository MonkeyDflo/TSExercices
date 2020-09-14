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
    //while globale
    while(n.next != null){
        // 2nd while
        let buff:number = n.data
        // à voir let m:Node = head // on pourrait peut etre le mettre égale à n, m serait plus restreint
        //let m:Node = n;
        let m = new Node(1)
        while(m.next != null){
            if(buff == m.data){
                m.deleteAthisNode(buff) // va supprimer le 1er == data qu'il rencontre
            }
            m = m.next;
        }
        n = m; // On a supprimer de m tous les doublons
        n = n.next;
    }
    return head;
}

const test1 = new Node(1)
test1.appendToTail(2);
test1.appendToTail(2);
test1.appendToTail(3);
console.log(test1);
console.log(DeleteLinkedListDuplicate(test1));