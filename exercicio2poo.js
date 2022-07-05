class Produto
{
    constructor(cod,n,desc,fab,vfab,vvend)
    {
        this.codigo = cod;
        this.nome = n;
        this.descricao = desc;
        this.fabricante = fab;
        this.valorfab = vfab;
        this.valorven = vvend;
        this._lucro = 0;
    }
    calcularLucro(vvend,vfab)
    {
        let luc = (vvend - vfab);
        return luc;
    }
    set lucro(l)
    {
        if(l>0)
        {this._lucro=l;}
        else
        {console.log("Esse valor não é apropriado e não será registrado");}
    }
    get lucro()
    {return this._lucro}
}
var P1 = new Produto(001,"Impressora","Jato de tinta","hp",100,300);
console.log(P1);
var l = P1.calcularLucro(300,100);
P1.lucro=l
console.log(P1);
