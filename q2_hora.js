var Hora = /** @class */ (function () {
    function Hora(hora, minutos, segundos) {
        this.hora = 8;
        this.minutos = 23;
        this.segundos = 56;
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    Hora.prototype.getHora = function () {
        return this.hora;
    };
    Hora.prototype.getMinutos = function () {
        return this.minutos;
    };
    Hora.prototype.getSegundos = function () {
        return this.segundos;
    };
    Hora.prototype.getHoraFormatada = function () {
        var horaFormatada = this.hora + ":" + this.minutos + ":" + this.segundos;
        return horaFormatada;
    };
    return Hora;
}());
// Exemplo de uso da classe Hora
var minhaHora = new Hora(8, 23, 56);
console.log("Minha hora \u00E9 ".concat(minhaHora.getHora(), "."));
console.log("Meus minutos agora ser\u00E3o ".concat(minhaHora.getMinutos(), "."));
console.log("E meus segundos ser\u00E3o agora ".concat(minhaHora.getSegundos(), "."));
console.log("Minha hora formatada ser\u00E1 tamb\u00E9m ".concat(minhaHora.getHoraFormatada(), "."));
