var a,b,c;
a = 3;
b = 4;
c = a+b;

console.log(c);
alert(c);

var Pessoa="Peixe";
var PEssoa="Gato";

console.log(Pessoa);
console.log(PEssoa);

var nome,sobrenome,nomeCompleto, idade;
nome = "Filipe";
sobrenome = "Lopes";
idade = 17;
nomeCompleto = nome + " " + sobrenome;
pessoa = idade + 10;

document.getElementById("texto").innerHTML = nomeCompleto;
document.getElementById("texto2").innerHTML = pessoa;


let pese = "Davi";
//let pese = "João";
//Daria Erro

//bloco de codigo redefinindo

var X=10;
{
    var X=2;
}
document.getElementById("X").innerHTML=X;

//bloco de codigo não redifinindo

let pes=10;

{
    let pes=2;
}
document.getElementById("pes").innerHTML=pes;

//Vai ser o primeiro e pronto

const C=10;

{
    const C=2;
}
document.getElementById("C").innerHTML=C;


var v1,v2,v3,v4,v5;
v1 =3
v2 =4
v3 = ++v1;
v2 = --v2; 

console.log(v3);
console.log(v2);

v4 = 4;
v5 = 5;
v4 += v5;

console.log(v4);

var p1,p2, TOTAL;
p1= "FILIPE";
p2= "LOPES";  
TOTAL = p1 + p2;

console.log(TOTAL);

var l1,l2,l3;
l1=4;
l2=3;
l3=(l1 == l2)
//retorna true ou false
console.log(l3)

var idad, eleitor, resultado1, resultado2, resultado3,resultado4,resultado5;
idad=18; 
eleitor = (idad < 18) ? "Não, Eleitor" : "Sim, Eleitor";
console.log("A resposta é: " + eleitor + " a idade dele é: " + idad);

resultado1 = (idad > 60 && idad < 70); //e
resultado2 = (idad > 10 || idad < 70); //ou
resultado3 = !(idad === 14); //negação 
resultado4 = (idad === 18 && idad === 70); //e
resultado5 = (idad === 18 || idad === 70); //ou

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);