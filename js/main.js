function botao(){
    document.getElementById('ola').innerHTML = '<button type="button" onclick="redirecionar()">Clique</button>';
}

function redirecionar(){
    window.open("https://github.com/VictorCichella")
}

/*function soma(n1,n2){
    return n1 + n2;
}

alert(soma(5,10))

function validaIdade(idade){
    var validar
    if (idade >= 18) {
    var validar = true;
    } else {
    var validar = false;
    }
    return validar;
}

var idade = prompt('Qual sua idade')
console.log(validaIdade(idade));

var d = new Date();
console.log(d.getUTCDate());
console.log(d.getMonth()+1);
console.log(d.getFullYear());

var count ;
for (count = 0; count <= 5; count++){
    alert(count)
}

var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}

var idade = prompt('Qual a sua idade ?')
if (idade >= 18){
    alert('maior de idade');
} else {
    alert('menor de idade');
};

var frutas = [{nome: 'maça', cor: 'vermelha'}, {nome: 'limao', cor: 'verde'}]
console.log(frutas);

var fruta = {nome: 'maça', cor: 'vermelha'}
console.log(fruta.nome);

var lista = ['maça','pera','laranja'];
lista.push('melancia');
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse);
console.log(lista.toString);
console.log(lista.join(' - '))


var nome = "Victor Hugo";
var idade = 20;
var idade2 = 10;
var frase = "Hello World"

alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Hello World", "Hello Brazil"));
console.log(frase.toUpperCase());
*/