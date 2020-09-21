import {Node} from "./../LinkedLists"

/*
Implement an algorithm to find the nth to last element of a singly linked list. 
*/

function findNthToLastElement(head:Node, d:number) {
    var n:Node = head  
    while(n.next != null && n.data != d){
        n = n.next
    }
    console.log(n)
    
    if(n.data = d){
        var res = new Node(n.data)
        console.log(res)
        while(n.next!=null){
            res.appendToTail(n.next.data)
            console.log(res)
            n = n.next
        }
    }
    return res
}

const obj1 = new Node(1); 
obj1.appendToTail(2)
obj1.appendToTail(2)
obj1.appendToTail(2)
obj1.appendToTail(3)
console.log("nth to last : " + JSON.stringify(findNthToLastElement(obj1, 2)));

