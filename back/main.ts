import {Node} from "./LinkedLists"
import {Stack, Queue} from "./StacksAndQueues"


// linked lists fundamentals
/*

const Noeud = new Node(1);
Noeud.appendToTail(2);
Noeud.appendToTail(3);
Noeud.deleteANode(Noeud, 3);
Noeud.deleteANode(Noeud, 3);
console.log(Noeud)


//Noeud.deleteANode(Noeud, 3);
//Noeud.deleteANode(Noeud, 3);
console.log(Noeud.deleteANode(Noeud, 1));
Noeud.deleteAthisNode(1);
console.log(Noeud);*/

// Stacks and Queues fundamentals
/*
const Pile = new Stack(1)
console.log(Pile.push(2));
console.log(Pile.push(3));
console.log(Pile.pop());
*/
const Queux = new Queue(1) 

/* 
console.log(Queux.addToTheQueue(2));
console.log(Queux.addToTheQueue(3));
console.log(Queux.addToTheQueue(4));
console.log("DEQUEUE !")
console.log(Queux.deQueue())
*/

// test dequeue
/*
Queux.addToTheQueue(2)
Queux.addToTheQueue(3)
Queux.addToTheQueue(4)
Queux.printAllQueue()
Queux.deQueue()
Queux.printAllQueue()
*/

console.log(Queux.addToTheQueue(2));
console.log(Queux.addToTheQueue(3));
console.log("DEQUEUE !")
console.log(Queux.deQueue())

