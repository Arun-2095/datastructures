// last IN , first OUT

class Stack {
 
    constructor(){
         this.item = []
    }
    push(value){
        this.item.push(value)
    }
    pop (){
        return this.item.pop()
    }

    get print() {
        return this.item.toString()
    } 

    get size () {
        return this.item.length
    }

    get isEmpty(){
        return this.item.length === 0
    }

}
