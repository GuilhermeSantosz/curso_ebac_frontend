// Função multiplicação 
function calculaArea(base: number, altura: number):number {
    return base * altura;
}

//criar a Const acessar a função e passar os parâmetros 
const resultado = calculaArea(10, 10)

console.log(resultado)

//Função saudação
function saudacao(nome: string): string {
    return `Olá ${nome}`
};

//criar a Const acessar a função e passar o parâmetro 
const nome = saudacao('Pessoa')

console.log(nome)