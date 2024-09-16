// Criando a classe heroi
class heroi{
    // Definindo as propriedades da classe
	constructor(nome, idade, tipo){
    	this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){ // Função atacar()
        switch (this.tipo) {
            case "mago":
                console.log(`O ${this.tipo} atacou usando magia`)
                break
            case "guerreiro":
                console.log(`O ${this.tipo} atacou usando espada`)
                break
            case "monge":
                console.log(`O ${this.tipo} atacou usando artes marciais`)
                break
            case "ninja":
                console.log(`O ${this.tipo} atacou usando shuriken`)
                break
            default:
                console.log(`O ${this.tipo} não é um tipo de herói válido!`)
        }
    }
}

let heroi1 = new heroi("joaopreco22", 22, "guerreiro")
let heroi2 = new heroi("fanstaminha", 37, "ninja")
let heroi3 = new heroi("_marquinhos_", 25, "mongw")
let heroi4 = new heroi("veterano84", 40, "mago")
let heroi5 = new heroi("convidado2024", 15, "monge")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
heroi5.atacar()
