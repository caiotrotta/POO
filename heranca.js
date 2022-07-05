class Pessoa
{
    constructor(n, i)
    {
        this.nome = n;
        this.idade = i;
    }
    falar()
    {
        console.log("Pessoa falando... Boa Tarde! ");
    }
}
class Professor extends Pessoa
{
    constructor(nome,idade,mat)
    {
        super (nome,idade);
        this.materia = mat;
    }
    darAula()
    {  console.log ("Professor está dando aula.")  }
}
var P1 = new Pessoa("Clodovaldo",81);
console.log(P1);
P1.falar();
var prof1 = new Professor("Renata",43,"Informática");
console.log(prof1);
prof1.falar();
prof1.darAula();
 // P1.darAula(); A Classe Mãe não pode utilizar metodos da classe filha.
 