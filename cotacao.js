//Consumindo a API de acordo com o Select no HTML:

//Separando o espaço para mostrar as informacões:
let showCoin = document.getElementById("show");

//Guardando os valores disponíveis para seleção em Select:
let select = document.getElementById("coins");
let option = select.options[select.selectedIndex];

function getOption() {
    //Função para pegar a opção selecionada
    let valor = document.getElementById("coins").value;
    //Mostrando no input a moeda escolhida:
    document.getElementById("text").value = valor.toUpperCase();
}

function getCotacao() {
    //Fazendo a requisição e retornando os valores de acordo com o Select:
    fetch("https://economia.awesomeapi.com.br/last/" + document.getElementById("coins").value)
        .then((response) => response.json())
        .then((data) => {
            function showCotacao() {
                let coin;

                //Pegando o valor da opção selecionada:
                getOptionValue = document.getElementById("coins").value;
                console.log(getOptionValue.toUpperCase());

                //"Caso o valor da opção selecionada NÃO seja vazio, faça o switch:"
                if (getOptionValue != "") {
                    switch (getOptionValue) {
                        case "EUR-BRL":
                            coin = data.EURBRL;
                            break;
                        case "USD-BRL":
                            coin = data.USDBRL;
                            break;
                        case "EUR-USD":
                            coin = data.EURUSD;
                            break;
                        case "USD-EUR":
                            coin = data.USDEUR;
                            break;
                        case "BTC-BRL":
                            coin = data.BTCBRL;
                            break;
                        default:
                            "Selecione uma das moedas.";
                            break;
                    }
                    showCoin.innerHTML = `
                    <h4>Informações de Moeda:</h4>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nome: ${coin.name}</li>
                        <li class="list-group-item">Compra: ${coin.bid}</li>
                        <li class="list-group-item">Venda: ${coin.ask}</li>
                        <li class="list-group-item">Variação: ${coin.varBid}</li>
                        <li class="list-group-item">Porcentagem de Variação: ${coin.pctChange}</li>
                        <li class="list-group-item">Alta: ${coin.high}</li>
                        <li class="list-group-item">Baixa: ${coin.low}</li>
                    </ul>`;
                }
            }

            showCotacao();
        });
}

let botaoMoeda = document.getElementById("getMoeda");
botaoMoeda.addEventListener("click", () => {
    getCotacao();
});