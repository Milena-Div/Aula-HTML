

//exercício 1

const numero = 25

if(numero>10)
{console.log("esse número é maior que 10")}
else {console.log("esse número é menor que 10")}

//exercício 2

const numero1 = 1
const numero2 = 99

if(numero1 + numero2 > 100){
    console.log("Esse número é maior que 100")}

else if (numero1+numero2===100) {
    console.log("Bingo! Deu 100!")}

else{console.log("Esse número é menor que 100")} 

//for

for (let i = 0; i < 9; i++) {
    console.log (i)
}

let i = 0;

while (i<11) {
    console.log(i + "x 5=" + i*5)
    i++
} 

//Faça um algoritmo que apresente o quadrado
//de cada um dos número entre 1 a 100.

for (let i = 1; i <= 100;i++) {
    console.log("O quadrado de" ,i,"é",i*i)
}


for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


//conceito A a F aninhado

const nota = 40

if (nota <0 | nota >100) {
    console.log("Erro")}

else {
    if (nota >= 90) {
    console.log("A")}

    else if (nota >= 80) {
        console.log("B")}

    else if (nota >=70) 
    {
        console.log("C")}

    else if (nota >= 60) {
    console.log("D")}

    else if (nota >= 50) {
        console.log("E")}

    else if (nota <50) {
        console.log("F")}}
        
    