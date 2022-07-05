class Cliente
{
    constructor(cad,desc)
    {
        this.cadastro = cad
        this.descricao = desc
    }
    dataCadastro()
    {
        {  console.log("Data do Cadastro: 03/02/2022")  }
    }
    
}
class PessoaFisica extends Cliente
{
    constructor(cadastro,descricao,n,c)
    {
        super(cadastro,descricao)
        this.nome = n
        this.cpf = c
    }
    dataCadastro()
    {
        { console.log("Data do cadastro: 02/02/2022")  }
    }
}
class PessoaJuridica extends Cliente
{
    constructor(cadastro,descricao,razsoc,nomeF,cn)
    {
        super(cadastro,descricao)
        this.razaosocial = razsoc
        this.nomeFantasia = nomeF
        this.CNPJ = cn
    }
    dataCadastro()
    {
        {  console.log("Data do Cadastro: 01/02/2022")  }
    }
}    
var C1 = new Cliente ("4002 ","João Flavio, 27 anos");
console.log(C1);
C1.dataCadastro();

var Pes1 = new PessoaFisica("2001","32 anos","Julia",12435676510);
console.log(Pes1);
Pes1.dataCadastro();

var Pess2 = new PessoaJuridica("1347","43 anos","Oliveira","Micha",12244478960);
console.log(Pess2);
Pess2.dataCadastro();
