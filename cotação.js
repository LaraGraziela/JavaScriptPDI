//botão, escuta o click, executa a função

let botaoSomar = document.getElementById('btn-soma');

botaoSomar.addEventListener('click', () => {
    let num1 = Number (document.getElementById('valor').value);
    let num2 = Number (document.getElementById('valor2').value);

    console.log(num1+num2);
})

const apiCota = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL'



let eur = (fetch(apiCota)
.then(response => response.json())
.then(data => data.EURBRL))

let usd = (fetch (apiCota))
.then(response => response.json())
.then(data => data.USDBRL)

console.log(eur);

function showCotacao() {
    let valorC;
    if(cotacao === 2){
        valorC = usd
    }
    console.log(valorC);
}
console.log(showCotacao(2)); 