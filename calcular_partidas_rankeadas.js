function calcularRank(vitoria, derrota){

 const saldo = vitoria - derrota;
 let nivel; 

 if (vitoria <=10) nivel = "Ferro";
else if (vitoria <=20) nivel = "Bronze";
else if (vitoria <=50) nivel = "Prata";
else if (vitoria <=80) nivel = "Ouro";
else if (vitoria <=90) nivel = "Diamante";
else if (vitoria <=100) nivel = "Lendário";
else nivel = "Imortal";

 return "O Herói tem o saldo de " + saldo + " e está no nível " + nivel;

}

console.log(calcularRank(75, 20));