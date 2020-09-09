import {Node} from "./LinkedLists"

// linked lists fundamentals
const Noeud = new Node(1);
Noeud.appendToTail(2);
Noeud.appendToTail(3);
Noeud.appendToTail(3);
console.log(Noeud)
Noeud.deleteANode(Noeud, 3);
Noeud.deleteANode(Noeud, 3);
console.log(Noeud)