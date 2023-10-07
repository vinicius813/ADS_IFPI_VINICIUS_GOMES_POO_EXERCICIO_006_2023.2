/* Alterando a implementação banco.ts das aulas anteriores para Encapsulamento com 
dois métodos privados e um público. */

// banco.ts
export class Conta {
    constructor(private numero : string, private saldo : number) {}
}

export class Banco {
    public contas : Conta[] = [];

    inserir (conta : Conta): void {
        this.contas.push(conta);
        console.log(`Conta ${conta.numero} cadastrada com sucesso.`);
    }

    consultar (numero : string): Conta | undefined {
        return this.contas.find(conta => conta.numero === numero)
    }
}

sacar (numero : string, valor : number): void {
        const conta = this.consultar(numero);
        if (conta) {
            if (conta.saldo >= valor) {
                conta.saldo -= valor;
                console.log(`Saque de ${valor} realizado com sucesso na conta ${numero}.`);
            }else {
                console.log(`Saldo insuficiente na conta ${numero} para realizar o saque!`);
        }else {
            console.log(`Conta ${numero} não encontrada!`);
        }
    }
}

depositar (numero : string, valor : number): void {
    const conta = this.consultar(numero);
    if (conta) {
        conta.saldo += valor;
        console.log(`Depósito de ${valor} realizado com sucesso na conta ${numero}!`);
    } else {
        console.log(`Conta ${numero} não encntrada!`);
    }
}

excluir (numero : string): void {
    const index = this.contas.findIndex(conta => conta.numero === numero);
    if (index !== -1) {
        this.contas.splice(index, 1);
        console.log(`Conta ${numero} excluída com sucesso!`);
    } else {
        console.log(`Conta ${numero} não encontrada!`);
    }
}

transferir (origem : string, destino : string, valor : number): void {
    const contaOrigem = this.consultar(origem);
    const contaDestino = this.consultar(destino);

    if (contaOrigem && contaDestino) {
        if (contaOrigem.saldo >= valor) {
            contaOrigem.saldo -= valor;
            contaDestino.saldo += valor;
            console.log(`Transferência de ${valor} realiada com sucesso de ${origem} para ${destino}.`);
        } else {
            console.log(`Saldo insuficiente na conta ${origem} para realizar a transferência.`);
        } else {
            console.log(`Uma das contas ${origem} ou ${destino} não foi encontrada.`);
        }
    }
}

getTotalSaldo() : number {
    return this.contas.reduce((total, conta) => total + conta.saldo, 0);
}