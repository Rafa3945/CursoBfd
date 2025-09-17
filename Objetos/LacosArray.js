
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Melancia"];
console.log("For:");
for(let x = 0; x < frutas.length; x++){
   console.log(frutas[x]);
}

console.log("While:");
let j = 0;
while(j < frutas.length){
   console.log(`${frutas[j]} na posição ${j}`);   //Isso serve para além de mostrar o nome da fruta, mostrar também a posição que ela ocupa na string.
   j++;
}

console.log("Do ... While:");
do{
   console.log(`${frutas[j]} na posição ${j}`);   //Isso serve para além de mostrar o nome da fruta, mostrar também a posição que ela ocupa na string.
   j++;
}
while(j < frutas.length);


console.log("for ... of");
for(let frutas of frutas){
  console.log(`${frutas}`);
}


