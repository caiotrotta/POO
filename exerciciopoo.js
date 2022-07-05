class Aluno
{
    constructor(n,end,tel)
    {
        this.nome = n 
        this.endereco = end
        this.telefone = tel
        this._media = 0
    }
    cadastrar(){
        console.log("O aluno "+this.nome+ " será cadastrado no banco de dados.")
    }
    calcularMedia(teste,prova){
        let med = (teste+prova)/2;
        return med;
    }
    set media (m)
    {
        if(m>=0 && m<=10)
        {this._media = m;}
        else
        {console.log("O valor da média é invalido e não será registrado")}
    }
    get media(){
        return this._media;
    }
}    
var A1 = new Aluno ("João Miguel","Rua Blá Blá Blá, 4 - Méier","(021)4002-8922");
console.log(A1);
A1.cadastrar();
var m = A1.calcularMedia(-1,"abc");
A1.media = m 
console.log(A1)
