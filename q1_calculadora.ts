class Calculadora {
    private operando1: number = 200;
    private operando2: number = 5;

    constructor(operando1 : number, operando2 : number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    public dividir(): number {
        return (this.operando1 / this.operando2);
    }

    public subtrair(): number {
        return (this.operando1 - this.operando2);
    }
}

// teste da classe Calculadora
const calculadora = new Calculadora(200, 5);

console.log("Minha divisão será: ", calculadora.dividir());
console.log("Minha subtração será: ", calculadora.subtrair());


/*  agora, irei tentar acessar meus atributos de forma que o TypeScript coloque um erro pois
o acesso ficará direto! */
/*
console.log("Operando 1: ", calculadora.operando1);  // Erro: a propriedade de acesso é privada.
console.log("Operando 2: ", calculadora.operando2);  // Erro: a propreiedade de acesso é privada.
*/




