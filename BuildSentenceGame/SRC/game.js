const readline = require('readline-sync');

const DadosDojogo = require('./DadosDojogo');



function BuildSentence(){
 let frases = 0;
        let acertos = 0;
        let erros = 0;
  

    while(frases <= 10){

   
    console.log(`

        --------------SENTENCE BUILDER--------------
              Bem Vindo ao Sentence Builder Game

              Vamos construir algumas frases!
       `)
        
    


         readline.question("\nPressione Enter para começar a construir a frase...");
        console.clear();

        for(const sentence of sentences){
            console.log(
                `
                \nFrase em Portugues: ${sentence.portugues}

                \nPalavras disponiveis: ${sentence.words.join(" | ")}
                `

            );
            let opcao = readline.question("\nEscolha uma opcao(CONTINUAR, REINICIAR, PULAR): ")
                  if(opcao.toLowerCase() === "reiniciar"){
                        console.clear();
                        frases = 0;
                        frases = -1;
                        erros = 0;
                        acertos = 0;
                        console.log("\nJogo reiniciado!");
                        return BuildSentence();
                    }
                    else if(opcao.toLowerCase() === "pular"){
                        frases++;
                    }
                    else if(opcao.toLowerCase() === "continuar"){
                        console.clear();
                        console.log(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                        
                    }else{
                        console.clear();
                        console.log(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                       
                        }
                        
            
            let answer = readline.question("\nDigite a frase em ingles usando as palavras disponiveis: ");

            if(answer === sentence.ingles){

                console.clear();
                console.log("\nParabens! Você construiu a frase corretamente!");
                acertos++;


                 let opcao = readline.question("\nEscolha uma opcao(CONTINUAR, REINICIAR, PULAR): ")
                    if(opcao.toLowerCase() === "reiniciar"){
                        console.clear();
                        frases = 0;
                        frases = -1;
                        erros = 0;
                        acertos = 0;
                        console.log("\nJogo reiniciado!");
                        return BuildSentence();
                    }
                    if(opcao.toLowerCase() === "pular"){
                        frases++;
                    }
                    if(opcao.toLowerCase() === "continuar"){
                        console.clear();
                        console.log(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                        
                    }else{
                        console.clear();
                        console.log(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                       
                        }
                    
                    
                

                    console.clear();

                readline.question(`
                    
                    \nPressione Enter para continuar...
                    `
                );
                frases++;
                        console.clear();
                        console.log(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
       
                        }
            else{
                console.clear();
                console.log(`\nOps! A frase correta é: ${sentence.ingles}`);
                erros++;
                frases++;
                
                readline.question("Pressione Enter para ir a próxima frase...");

                console.clear();

                console.log(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                    `);
                    
                 let opcao = readline.question("\nEscolha uma opcao(CONTINUAR, REINICIAR, PULAR): ")
                     if(opcao.toLowerCase() === "reiniciar"){
                        console.clear();
                        frases = 0;
                        frases = -1;
                        erros = 0;
                        acertos = 0;
                        console.log("\nJogo reiniciado!");
                        return BuildSentence();
                     }

                    if(opcao.toLowerCase() === "pular"){
                        frases++;
                    }
                       
                    if(opcao.toLowerCase() === "continuar"){
                        console.clear();
                        console.log(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                      
                    }else{
                        console.clear();
                        console.log(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                        }
                        
                    
                    
                    console.clear();

                readline.question(`

                    \nPressione Enter para continuar...
                `);
                frases++;
                 console.clear();
                        console.log(`\nFrases construidas: ${frases} | Acertos: ${acertos} | Erros: ${erros}
                        `);
                     
                        }

                    }
        
        

        console.log(`

            Jogo finalizado! Você construiu ${frases} frases, com ${acertos} acertos e ${erros} erros.
        `);

        }
    } 


BuildSentence();
module.exports = BuildSentence;