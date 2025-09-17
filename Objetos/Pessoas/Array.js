//Forma 1: Já atribuindo valores diretamente.
var dadosAluno = ['João', 12345, true];
console.log(dadosAluno);
console.log(dadosAluno[0]);   //Entre os [] eu coloco a posição do valor que eu quero retornar, as posições começam do 0.

//Forma 2 (Mais usada): Sem atribuir valores.
var curso = [];
curso[0] = 'ADS';
curso[1] = 2025;
curso[3] = 'Computacao';
console.log(curso);

//Forma 3 (Não utilizar! Apenas para fins didáticos)
var notas = new Array();  //Cria um valor Array sem atribuição de valores, igual a forma 2, ou posso atribuir os valores diretamente dentro do ().
console.log(notas);

//Forma 4: Atribuindo de múltiplos tipos diretamente com array literal
var frutas = ['Uva', 'Melancia', 'Morango', 'Laranja'];
frutas.push('Kiwi');         //O push é usado para adicionar algum valor ao final do Array.
frutas.unshift('Caqui');     //O unshift é usado para adicionar algum valor ao início do Array.
frutas.pop();     //O pop é usado para retirar o último valor do Array. Se o pop estiver antes do push, vai remever o ultimo valor de dentro do Array, caso esteja depois do push, ele removerá o valor que está sendo apresentado pelo push.
frutas.shift();    //O shift é usado para retirar o primeiro valor do Array. Se o shift estiver antes do unshift, vai remever o primeiro valor de dentro do Array, caso esteja depois do unshift, ele removerá o valor que está sendo apresentado pelo unshift.
frutas.splice(0,1);  //Serve para remover ou adicionar algo do Array, de acordo com a posição que o valor ocupa dentro do vetor.
console.log(frutas);
console.log(frutas.length);  //Para informar o tamanho do Array.

