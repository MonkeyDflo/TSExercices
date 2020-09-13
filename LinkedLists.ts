class Node {
    data: number
    next: Node = null
    constructor(d:number){
        this.data=d
    }
    appendToTail(d:number){
        let end:Node = new Node(d);
        let n:Node = this
        while(n.next != null){n = n.next}
        n.next = end
    }
    deleteANode(item:Node, d:Number):Node{
        let n:Node = item
        if(n.data == d){
            n = n.next
        }else{
            while((n.next != null) && (n.next.data != d)){n=n.next}
            if(n.next != null){
                if(n.next.data == d){
                    n.next=n.next.next
                }
            }
        }   
        return n
    }
    deleteAthisNode(d:Number){
        let n:Node = this
        if(n.data == d){
            n = n.next
        }else{
            while((n.next != null) && (n.next.data != d)){n=n.next}
            if(n.next != null){
                if(n.next.data == d){
                    n.next=n.next.next
                }
            }
        }   
        this.data = n.data
        this.next = n.next
    }
}

export {Node}