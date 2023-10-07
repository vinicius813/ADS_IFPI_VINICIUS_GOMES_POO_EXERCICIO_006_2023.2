var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this.operando1 = 200;
        this.operando2 = 5;
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.prototype.dividir = function () {
        return (this.operando1 / this.operando2);
    };
    Calculadora.prototype.subtrair = function () {
        return (this.operando1 - this.operando2);
    };
    return Calculadora;
}());
// teste da classe Calculadora
var calculadora = new Calculadora(200, 5);
console.log("Minha divisão será: ", calculadora.dividir());
console.log("Minha subtração será: ", calculadora.subtrair());
/*  agora, irei tentar acessar meus atributos de forma que o TypeScript coloque um erro pois
o acesso ficará direto! */
/*
console.log("Operando 1: ", calculadora.operando1);  // Erro: a propriedade de acesso é privada.
console.log("Operando 2: ", calculadora.operando2);  // Erro: a propreiedade de acesso é privada.
*/
