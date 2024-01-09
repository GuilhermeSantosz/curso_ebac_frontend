function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo; 
    this.anoFabricacao = anoFabricacao;
}

const carroJoao = new Carro("Fiesta", "Ford", 2020, 2019)

console.log(carroJoao)