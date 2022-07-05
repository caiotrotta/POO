class Aluno{
    constructor(n, end, tel){
        this.nome = n;
        this.endereco = end;
        this.telefone = tel;
    }
    calcularMedia(teste,prova){
        return (teste+prova)/2;
    }

}
var A1 = new Aluno ("João Miguel","Rua Bla Bla Bla, 15", "(021)4002-8922");
console.log(A1);
console.log ("A média do João Miguel é " + A1.calcularMedia(7,9));

var A2 = new Aluno ("Ana Luiza", "Rua das Rosas 20","(021)9999-9999");
console.log(A2);
console.log ("A média da Ana Luiza é " + A2.calcularMedia(5,9));
