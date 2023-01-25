class HashMap {
  constructor(size) {
    this.store = [];
    this.size = size;
  }

  hashTable(key) {
    let code = key.split("").reduce((accumlateValue, currentValue) => accumlateValue + currentValue.charCodeAt(0),0);

      let index =  code % this.size;

      return index
  }

  getValue(key) {
    let index = this.hashTable(key);

     if(this.store[index]?.length){  
        let value = this.store[index].find((value)=> value[0] === key)
        return value[1]
     }else {
        return "No Values"
     }

  }

  setValue(key, value) {
     
     let index = this.hashTable(key);
        
     if(this.store[index]?.length){
       
         let storedValue = this.store[index]

         let isExistingValue = storedValue.findIndex(stored => stored[0] === key) 

         if (isExistingValue !== -1) {
             storedValue[isExistingValue] = [key, value];
            } else {
             storedValue.push([key,value]);                        
         }
         this.store[index] = storedValue;

     }else {
                
        let tem = []  
        tem.push([key, value]);
        this.store[index] = tem; 
     }

    
  }

  print() {
 
     if(this.store.length) {
         
        for(let i=0; i < this.store.length; i++){
          
            console.log(`index ${i} stored Value ${JSON.stringify(this.store[i])}`)

        }
     }else {

         return "No Records Stored"
     }
  }
}