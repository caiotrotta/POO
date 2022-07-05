class Veiculo
{
    constructor(cod,tip,fab,anofab)
    {
        this.codigo = cod;
        this.tipo = tip;
        this.fabricacao = fab;
        this.anoFabricacao = anofab;
    }
    mover()
     {  console.log("Veiculos em movimento");  }

}
class  Aviao  extends Veiculo
{
    constructor(codigo,tipo,fabricacao,anoFabricacao,categ,port)
    {
        super(codigo,tipo,fabricacao,anoFabricacao);
        this.categoria = categ;
        this.porte = port;
    }
    mover()
    {  console.log("O Avião está voando.");  }

}
class Carro extends Veiculo
{
    constructor(codigo,tipo,fabricacao,anoFabricacao,qtp)
    {
        super(codigo,tipo,fabricacao,anoFabricacao);
        this.quantidadePessoas = qtp;
    }
    mover()
     {  console.log("O Carro correndo..."); }

}
class Barco extends Veiculo
{
    constructor(codigo,tipo,fabricacao,anoFabricacao,numauto,tipob)
    {
        super(codigo,tipo,fabricacao,anoFabricacao);
        this.tipoBarco = tipob
        this.numAutorizacao = numauto;
    }
    mover()
    {  console.log("O Barco navegando...");  }

}
var A1 = new Aviao (001,"Boing","Infraero",2018,"Boing 747","Grande");
var C1 = new Carro (1234,"Carro","Fiat",1997,5);
var B1 = new Barco (0004,"Barco de Passeio","Brasil Boat",2021,"Cruzeiro",5033)
console.log(A1);
A1.mover();
console.log(C1);
C1.mover();
console.log(B1);
B1.mover();