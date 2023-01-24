// first IN , first OUT

class Queue {

  constructor(){
      this.list = [];
  }

  get size(){
      return this.list.length;
  }

  enqueue(item){
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift()
  }
   
  get peak() {
      return this.list[0]
  }

  get print(){
    return this.list.toString()
  }

  get isEmpty(){
    return this.list.length === 0
  }


}