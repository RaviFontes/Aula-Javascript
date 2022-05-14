//alert("bem vindo!");

/*document.write("Bem vido ao Javascript");
prompt("Dite seu nome"); //caixa para digitar algo
resp= confirm("Será que vai chover?"); //caixa de confirmação
//Alertas 
alert("Um retorno de carro\bem no meio desta linha");
alert("\"Isso nao saiu como deveria\"disse ela");
alert("esta linha tem tabulação\taqui");
*/
/*
var a,b;
a = 4;
b = "5 kg de açucar";

document.write("O valor da variável a é: " +a );
document.write("<p>" +"O valor da variavael B é: "+b+"</p>");
document.write("<p>" +"O valor da variavael A dividido por 2 é: " +a/2+" </p>");
document.write("<p>" +"O valor da variavael B dividido por 2 é: " +b/2+" </p>");

*/ 
/*
var a, inteiro, flutuante;
a = "45.78 Kg de açucar"
inteiro = parseInt(a);//converte para numero Inteiro
flutuante = parseFloat(a); // converte em numeros flutuantes
document.write("O valor da variável A é: " +a);
document.write("<p>" + "O valor inteiro da variavel é: " +inteiro+"</p>");
document.write("<p>" + "O valor inteiro da variavel A dividido por 2 é: " +inteiro/2+"</p>");
document.write("<p>" + "O valor da variavel decimal da variavel é: " +flutuante+"</p>");
*/
/*
var a, b, c;
a= "Olá pessoal ";
b= "Seja bem vindo ao Javascript";
c= a+b;
alert(c);
*/ 
/*
a = 50/2;
b = 100/5;
c = 25/2;
d = 50-50;
e = 50%2; 

document.write("<p>" + a +"</p>"); 
document.write("<p>" + b +"</p>");
document.write("<p>" + c +"</p>");
document.write("<p>" + d +"</p>");
document.write("<p>" + e +"</p>");
*/ 
/*
hoje=new Date();
xDia=hoje.getDay();
pratoDoDia =new Array(7);
diaSemana = new Array(7);
precoDoPrato = new Array(7);

diaSemana[0] = "Domingo";
diaSemana[1] = "Segunda-Feira";
diaSemana[2] = "Terça-feira";
diaSemana[3] = "Quarta-feira";
diaSemana[4] = "Quinta-feira";
diaSemana[5] = "Sexta-feira";
diaSemana[6] = "Sábado";
//pratos do dia 
pratoDoDia[0] = "Lazanha";
pratoDoDia[1] = "Virdo a Paulista";
pratoDoDia[2] = "Carne de Panela";
pratoDoDia[3] = "Feijoada";
pratoDoDia[4] = "Arroz de forno";
pratoDoDia[5] = "bife com Batata";
pratoDoDia[6] = "Feijoada";
//preço dos pratos 
precoDoPrato[0] = "R$ 16.50";
precoDoPrato[1] = "R$ 19.90";
precoDoPrato[2] = "R$ 15.00";
precoDoPrato[3] = "R$ 18.00";
precoDoPrato[4] = "R$ 13.10";
precoDoPrato[5] = "R$ 16.45";
precoDoPrato[6] = "R$ 18.05";


document.write("O número da semana é: " + (xDia+1));
document.write("<p><strong>" + "hoje é: </strong>" + diaSemana[xDia]);
document.write("<p><strong>" + "O prato do dia é</strong>: " + pratoDoDia[xDia]);
document.write("<p>" + "O preço do prato do dia é: " + precoDoPrato[xDia]);
*/

for(i=1;i<5;i++){
    document.write("Esta é a linha ",i,"<br>");
}