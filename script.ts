import { Queue } from "./Queue";
import * as leia from 'readline-sync'

const fila = new Queue<string>();
let opcao: number;
let finalizar: boolean = false

while (finalizar === false) {
    opcao = parseInt(leia.question("Selecione uma opcao: \n1 - Adicionar novo Cliente\n2 - Listar todos clientes\n3 - Chamar cliente\n0 - Finalizar programa "));
    switch (opcao) {
    case 1:
        let cliente: string = leia.question("Digite o nome do cliente: ");
        fila.enqueue(cliente);
        console.log("Fila:");
        fila.printQueue();
        console.log(`Cliente ${cliente} adicionado \n`);
        break;
    
    case 2:        
        fila.printQueue();
        
        break;

    case 3:
        fila.dequeue()
        break;

    case 0:
        console.log("Finalizou programa");
        finalizar = true
        break;

    default:
        console.log("Erro");
        break;
}
}