class Funcionario
{
    constructor(n,cpf,datac,end)
    {
        this.nome = n
        this.CPF =cpf
        this.dataContatacao = datac
        this.endereco = end
    }
    calcularSalario()
    {  console.log() }
}
class Professor extends Funcionario
{
    constructor(nome,CPF,dataContatacao,endereco,hrmen,vhr)
    {
        super(nome,CPF,dataContatacao,endereco)
        this.horasMensais = hrmen
        this.valorHora = vhr
    }
    calcularSalario()
    {console.log("O salário do Professor é ",this.horasMensais*this.valorHora)}
}
class Vendedor extends Funcionario
{
    constructor(nome,CPF,dataContatacao,endereco,totalven,perccom)
    {
        super(nome,CPF,dataContatacao,endereco)
        this.totalVendasMes = totalven
        this.percentualComissao = perccom
    }
    calcularSalario()
    {console.log("O Salário do vendedor é",(this.totalVendasMes*this.percentualComissao)/100)}
}
var F1 = new Funcionario ("Claudio",10020030010,"01/02/2022","Rua Sei lá - 4")
var P1 = new Professor ("Renata",20010030010,"04/05/2021","Rua Blá Blá - 10",300,16)
var V1 = new Vendedor ("João",12345678901,"03/05/2020","Rua Blá Blá - 34",1000,80)

console.log(F1);
console.log(P1);
P1.calcularSalario();
console.log(V1);
V1.calcularSalario();
