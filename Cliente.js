class Cliente {
    constructor (nome, telefone, renda, email) {
        this.nome = nome
        this.telefone = telefone
        this.renda = renda
        this.email = email
    }

    verificarCredito() {
        const minhaPromise = new Promise((resolve,reject) => {
            if (this.renda > 2000) {
                resolve(`Crédito Aprovado`)
            } else {
                reject(`Crédito Recusado`)
            }
        })

        return minhaPromise.then(
            (resultado) => console.log(resultado)
        ).catch(
            (resultado) => console.log(resultado)
        )
    }
}

const cliente1 = new Cliente("Teste","(19)99999-9999",3500,"teste@email.com")

cliente1.verificarCredito()