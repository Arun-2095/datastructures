class Node {
  nextNode = null;
  constructor(value) {
    this.value = value;
  }

  get next() {
    return this.nextNode;
  }

  set next(value) {
    this.nextNode = value;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.listLength = 0;
  }

  get size() {
    return this.listLength;
  }

  get isEmpty() {
    return this.listLength === 0;
  }

  prepend(value) {
    let node = new Node(value);

    if (!this.isEmpty) {
        node.next = this.head;
    }
    this.head = node;
    this.listLength++;
  }

  append(value) {
    let node = new Node(value);

    if (this.isEmpty) {
      this.head = node;
    } else {
        
        let isLast = false;

        let currentNode  = this.head
        while(!isLast) {
            if(currentNode.next){
                currentNode = currentNode.next
            }else{
                isLast = true
                currentNode.next = node
            }
        }
     
    }

    this.listLength++;
  }

  insert(value, insertIndex){
      
    if(this.size < insertIndex  &&  insertIndex < 0 ) {
     console.log("INVALID INDEX")
    }else if(insertIndex === 0){
      this.prepend(value)
    }else { 

          let node = new Node(value);

          let list = this.head;

    for(let i=0; i < insertIndex ; i++ ){
      
      if(i === insertIndex -1) {
        node.next = list.next;
        list.next = node;
        this.listLength++;
        break;
      }
      list = list.next;
     
    }
  }
  }


  remove(removeIndex) {

      if (this.size <= removeIndex || removeIndex < 0) {
        console.log("INVALID INDEX");
      } else if (removeIndex === 0) {
          this.head =  this.head.next;
          this.listLength--;
      } else {

            let list = this.head;

        for (let i = 0; i < removeIndex; i++) {
          if (i === removeIndex - 1) {
            list.next = list.next.next
            this.listLength--;
            break;
          }
          list = list.next;
        }
      }
  }

  print() {
    let currentNode = this.head;

    let value = [];

    while (currentNode) {
      value.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return value.toString();
  }
}


