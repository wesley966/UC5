import readline from 'readline-sync'
import { Sentences } from './DadosDojogo.js';

const sentences = Sentences

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function narrar(texto, velocidade = 40) {
   try{
    for (let i = 0; i < texto.length; i++) {
        process.stdout.write(texto[i]);
        await sleep(velocidade);
    }
    console.log();
    await sleep(300);
}catch (err){
    console.log(texto);
}
}

export async function BuildSentence(){
    console.clear();
        let frases = 0;
        let acertos = 0;
        let erros = 0;

    while(frases <= 10){

   await narrar(`

        --------------SENTENCE BUILDER--------------
              Bem Vindo ao Sentence Builder Game

              Vamos construir algumas frases!
       `);
       await narrar("\nPressione Enter para continuar...");
        readline.question("");
        console.clear();



        for(let sentence of sentences){
            await narrar(
                `
                \nFrase em Portugues: ${sentence.portugues}

                \nPalavras disponiveis: ${sentence.words.join(" | ")}
                `
                
            );
            await narrar("\nDigite a frase em ingles usando as palavras disponiveis: ");
            let answer = readline.question("");
            

            if(answer === sentence.ingles){

                console.clear();
               await narrar("\nParabens! Você construiu a frase corretamente!");
                acertos++;
                    console.clear();

    await narrar("\nPressione Enter para continuar...");
                       readline.question("");
                          console.clear();
                        await narrar(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                        
                        await narrar("\nPressione Enter para continuar...");
                       readline.question("");
                         console.clear();
                         // Verifica se a frase anterior foi respondida corretamente
                         if (frases > 0) {
                             await narrar(`\nFrase Anterior:, ${sentences[frases - 1].portugues}`)
                         }
                         //verifica se a proxima frase existe
                        if (frases < sentences.length - 1) {
                        await narrar(`

                            \nProxima Frase:, ${sentences[frases + 1].portugues}
                            `);


                await narrar("\nEscolha uma opcao: [V]VOLTAR, [S]SAIR, [P]PULAR");
                   let opcao = readline.question("");

                 if(opcao.toLowerCase() === "p" ){
                    frases++;
                    }
                    else if(opcao.toLowerCase() === "v"){
                       frases--;
                        
                    }else if(opcao.toLowerCase() === "s"){
                        process.exit();
                       
                    }
                   
                    console.clear();
                }
                    
                        }
            else{
                console.clear();
                await narrar(`\nOps! A frase correta é: ${sentence.ingles}`);
                erros++;
                frases++;


                        await narrar("\nPressione Enter para continuar...");
                       readline.question("");
                          console.clear();
                        await narrar(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                        
                        await narrar("\nPressione Enter para continuar...");
                       readline.question("");
                         console.clear();
                         // Verifica se a frase anterior foi respondida corretamente
                         if (frases > 0) {
                             await narrar(`\nFrase Anterior:, ${sentences[frases - 1].portugues}`)
                         }
                         //verifica se a proxima frase existe
                        if (frases < sentences.length - 1) {
                        await narrar(`

                            \nProxima Frase:, ${sentences[frases + 1].portugues}
                            `);


                await narrar("\nEscolha uma opcao: [V]VOLTAR, [S]SAIR, [P]PULAR");
                   let opcao = readline.question("");

                 if(opcao.toLowerCase() === "p" ){
                    frases++;
                    }
                    else if(opcao.toLowerCase() === "v"){
                       frases--;
                        
                    }else if(opcao.toLowerCase() === "s"){
                        process.exit();
                      
                    }
                   
                    console.clear();
                }
                    

                    }
                    
                         console.clear();
                        await narrar(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                         console.clear();

                    }

        }
     
    await narrar(`

            Jogo finalizado! Você construiu ${frases} frases, com ${acertos} acertos e ${erros} erros.
        `);
    }


