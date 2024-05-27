

const frase = "O rato roeu a roupa do rei de roma";
const tamanho = frase.length - 1;
const vogais = "aeiouAEIOU"

let contador = 0;

for (let i = tamanho; i >= 0; i--) {
    if (vogais.includes(frase[i])) { 
        contador++
    }
}

console.log("O número de vogais na frase é: ", contador);
    
   