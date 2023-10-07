class Hora {
    private hora : number = 8;
    private minutos : number = 23;
    private segundos : number = 56;

    constructor (hora : number, minutos : number, segundos : number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    public getHora(): number {
        return this.hora;
    }

    public getMinutos(): number {
        return this.minutos;
    }

    public getSegundos(): number {
        return this.segundos;
    }

    public getHoraFormatada(): string {
        const horaFormatada = this.hora + ":" + this.minutos + ":" + this.segundos;
        return horaFormatada;
    }
}

// Exemplo de uso da classe Hora
const minhaHora = new Hora(8, 23, 56);
console.log(`Minha hora é ${minhaHora.getHora()}.`);
console.log(`Meus minutos agora serão ${minhaHora.getMinutos()}.`);
console.log(`E meus segundos serão agora ${minhaHora.getSegundos()}.`);
console.log(`Minha hora formatada será também ${minhaHora.getHoraFormatada()}.`);




