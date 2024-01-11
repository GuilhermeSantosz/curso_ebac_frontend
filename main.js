function Carro(marca, rival) {
    this.marca = marca;
    this.rival = rival;
    this.dizOi = function() {
        console.log(this.marca + " disse olá")
        console.log(this.marca +  " disse que não gosta da " + this.rival)
    }
}

    
    function Modelo(marca, modelo, ano, rival, motor) {
        this.modelo = modelo
        this.motor = motor
        // this.ano = ano
        let _ano = ano

        this.getAno = function() {
            return `O melhor ano do ${modelo} é ${_ano}`
        }
        this.dizModelo = function() {
            console.log("Melhor modelo: " + this.modelo)
        } 
        this.dizAno = function() {
            console.log(this.getAno())
        } 
        this.dizMotor = function() {
            console.log("O motor era um: " + this.motor)
        }   
        
    Carro.call(this, marca, rival)
    
}

    function Concorrente(marca, modelo, ano, rival, motor) {
        this.modelo = modelo
        this.motor = motor
        // this.ano = ano
        let _ano = ano

        this.getAno = function() {
            return `O melhor ano do ${modelo} é ${_ano}`
        }
        this.dizModelo = function() {
            console.log("Melhor modelo: " + this.modelo)
        } 
        this.dizAno = function() {
            console.log(this.getAno())
        } 
        this.dizMotor = function() {
            console.log("O motor era um: " + this.motor)
        }   

        Carro.call(this, marca, rival)
    }

const camaro = new Modelo("Chevrolet", "Camaro Z/28", 1967, "Mustang", "V8")
const mustang = new Concorrente("Ford", "Boss 429", 1969, "Camaro", "V8")

camaro.dizOi()
camaro.dizModelo()
camaro.dizMotor()
console.log(camaro.getAno())
console.log('------------')
mustang.dizOi()
mustang.dizModelo()
mustang.dizMotor()
console.log(mustang.getAno())
