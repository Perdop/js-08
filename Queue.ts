interface queueInterface<Type> {
   enqueue(dataItem: Type): void;
   dequeue(): Type | undefined;
   isEmpty(): boolean;
   count(): number;
   printQueue(): void;
   peek(): Type | undefined;
   contains(dataItem: Type): boolean;
   clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {

   private QueueData: Array<Type> = [];

   constructor() { }

   isEmpty(): boolean {
      let result = this.QueueData.length <= 0;
      return result;
   }

   enqueue(dataItem: Type): void {
      this.QueueData.push(dataItem);
   }

   dequeue(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia \n");
         return;
      } else {
         var element = this.QueueData.shift();
         console.log(`Chamando ${element} \n`);
         
         return element;
      }
   }

   count(): number {
      let len = this.QueueData.length;
      return len;
   }

   printQueue(): void {
      if (this.isEmpty()) {
         console.log("A fila está vazia \n");
      } else {
         for (let i = 0; i < this.QueueData.length; i++) {
         console.log(this.QueueData[i] + "\n");
      } 
      }
   }

   peek(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData[0];
         return element;
      }
   }

   contains(dataItem: Type): boolean {
      if (this.QueueData.includes(dataItem)) {
         return true;
      } else {
         return false;
      }
   }

   clear(): void {
      this.QueueData.length = 0;
   }

}