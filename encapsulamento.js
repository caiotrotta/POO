class conta
{
    constructor()
    {
        this._saldo = 0;
    }
    get saldo()
    {
        return this._saldo;
    }
    set saldo(valor)
    {
        if(valor<=0)
        { console.log("Valor não permitido.") }
        else
        { this._saldo = this._saldo + valor; }
    }
}
var C1 = new conta();
C1.saldo = -3;
console.log(C1);    
