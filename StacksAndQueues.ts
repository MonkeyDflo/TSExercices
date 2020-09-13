// StacksAndQueus.ts

import {Node} from "./LinkedLists"

class Stack {
    top:Node = null
    constructor(d:number){
        this.top = new Node(d)
    }
    push(d:number){
        // add a node to the top of the stack
        let newTop:Node = new Node(d);
        newTop.next = this.top;
        this.top = newTop
        return this;
    }
    pop(){
        // delete the top node of the stack
        this.top = this.top.next
        return this;
    }
}

class Queue {
    first:Node
    end:Node
    constructor(d:number){
        this.first = new Node(d);
        this.end = this.first;
    }
    addToTheQueue(d:number){
        let newEnd:Node = new Node(d);
        newEnd.next = this.end;
        this.end = newEnd;
        return this;
    }
    deQueue(){
        let n:Node = this.end
        while(n.next != this.first){
            n = n.next
        }
        if(n.next == this.first){ 
            n.next = null
            this.first = n
        }
        return this;
    }
    printAllQueue(){
        let n:Node = this.end
        console.log( " Print all queue ! ")
        while(n !=null){
            console.log(" N : " + JSON.stringify(n));
            n=n.next;
        }
    }

}

export {Stack, Queue}