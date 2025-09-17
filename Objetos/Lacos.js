
//O for é usado quando eu sei quantas vezes vou repetir.
//Exemplo for:
console.log('Laço for:');
for(let x = 1; x <= 10; x++){
  console.log("Valor de X", x);
}


//O while é usado quando eu não sei quantas vezes vou repetir.
//Exemplo while:
console.log('Laço while:');
let j = 1;
while(j <= 10){
  console.log("Valor de X", j);
  j++;
}

//O do while roda ao menos uma vez.
//Exemplo do ... while
console.log('Laço do ... while:');
do{
  console.log("Valor de X", j);
  j++;
} 
while(j <=10);