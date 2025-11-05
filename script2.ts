import { Stack } from "./Stack";
import * as leia from 'readline-sync'

const pilha = new Stack<string>();
let finalizar:boolean, opcao:number
finalizar = false

while (finalizar === false) {
    opcao = parseInt(leia.question("Selecione uma opcao: \n1 - Adicionar novo livro\n2 - Listar todos livros\n3 - Retirar livro\n0 - Finalizar programa "));
    switch (opcao) {
        case 1:
            let livro: string = leia.question("Digite o nome do livro: ");
            pilha.push(livro);
            console.log("\n----------------------------------------------------------\nPilha:");
            pilha.printStack()
            console.log(`\nLivro ${livro} adicionado \n---------------------------------------------------------- \n`);
            break;

        case 2:
            console.log("----------------------------------------------------------\nPilha:");
            pilha.printStack()
            console.log("----------------------------------------------------------\n");
            
            break;
    
        case 3:
            if (pilha.isEmpty() === true) {
                console.log("----------------------------------------------------------\nPilha Vazia \n");
            } else {
                let pop = pilha.pop()
                console.log("Pilha:");
                pilha.printStack()   
                console.log(`\nO livro ${pop} foi retirado\n----------------------------------------------------------`);
            }
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