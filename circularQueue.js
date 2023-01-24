//  first in , first out with fixed size
class CircularQueue {

   constructor(capacity){
       this.capacity =  capacity;
       this.list = [];
        
       this.start = -1;
       this.end = -1;
   }

  
   get isEmpty(){
    return this.list.length === 0;
   }
   
   get isFull(){
      return this.list.length === this.capacity;
   }

   get peak(){
       return this.isEmpty ?  "Queue is empty"  : this.list[this.start];
   }

    enqueue(value){

        if(this.isFull) {
            console.log("Queue is full")
        }else {

            if(this.isEmpty){
                this.start += 1;
            }

           if(this.end === this.capacity && !this.isFull) {
               this.end = 0;
           }else {
               this.end +=1;
           } 

            this.list.push(value);            
        }

    }

    dequeue(){
        if(this.isEmpty) {
            this.start =  -1;
            console.log("Queue is empty")
        }else{ 
            
            if (this.start === this.capacity && !this.isFull){
                this.start = 0;
            }else{
                this.start += 1;
            } 

            return this.list.shift()

        }

        
    }

    get print(){
        return this.list.toString()
    }

    get positions(){

        return {start: this.start, end: this.end}
    }

}