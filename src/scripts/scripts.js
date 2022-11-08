let numeroCartas;

// Laço do...while que só permite a entrada de números pares maiores ou iguais a 4 e menores ou iguais a 14
let invalid = true;
do {
    numeroCartas = Number(prompt("Com quantas cartas você quer jogar? 4 a 14"))

    if (numeroCartas % 2 === 0 && 4 <= numeroCartas && numeroCartas <= 14) invalid = false;

} while (invalid);

// As cartas possíveis de serem jogadas
let cartaBobRoss = "bobrossparrot", cartaExplody = "explodyparrot", cartaFiesta = "fiestaparrot", cartaMetal = "metalparrot";
let cartaRevertIt = "revertitparrot", cartaTriplets = "tripletsparrot", cartaUnicorn = "unicornparrot";
const listaCartas = [cartaBobRoss, cartaExplody, cartaFiesta, cartaMetal, cartaRevertIt, cartaTriplets, cartaUnicorn];

// A partir daqui, o foco é criar a mão de cartas, embaralhar, imprimir na tela etc
function comparador() {
    return Math.random() - 0.5;
}
const cartasEmJogo = [];
let cartaAtual;
for (let i = 0; i < numeroCartas / 2; i++) {
    cartaAtual = getCarta(listaCartas[i]);
    cartasEmJogo.push(cartaAtual)
    cartasEmJogo.push(cartaAtual);
}
cartasEmJogo.sort(comparador);

function getCarta(gifImg) {
    return `
    <li class="card" onclick="jogada(this)">
        <div class="front-face face">
            <img src="arquivos-uteis/front.png" alt="">
        </div>
        <div class="back-face face"> 
            <img src="arquivos-uteis/${gifImg}.gif" alt="">
        </div>
    </li>
    `;
}

// Este bloco põe as cartas em jogo
const cartas = document.querySelector("ul");
let contador = 0;
for (let i = 0; i < numeroCartas; i++) {
    cartas.innerHTML += cartasEmJogo[i];
}

// Função que recebe a carta escolhida pelo usuário. Caso ele tenha selecionado apenas uma, ela espera a segunda seleção.
// Do contrário, ela aguarda uma segunda jogada e, em seguida, compara as duas
let primeiraCarta;
let segundaCarta;
let contaJogadas = 0;
let totalJogadas = 0;
function jogada(carta) {
    totalJogadas++;

    if (primeiraCarta) { if (carta === primeiraCarta) return; }

    carta.classList.add("carta-virada");
    if (contaJogadas > 1) contaJogadas = 0;

    if (contaJogadas === 0) primeiraCarta = carta;
    else segundaCarta = carta;

    controlaJogada();

    controlaJogo();

    contaJogadas++;
}

function controlaJogada() {
    if (segundaCarta) {
        if (primeiraCarta.innerHTML !== segundaCarta.innerHTML) {
            setTimeout(function () {
                movimentaCartas();
            }, 1000)

        } else {
            primeiraCarta = null;
            segundaCarta = null;
        }
    }
}

function movimentaCartas() {
    primeiraCarta.classList.add("carta-volta");
    segundaCarta.classList.add("carta-volta");
    primeiraCarta.classList.remove("carta-virada");
    segundaCarta.classList.remove("carta-virada");

    primeiraCarta.classList.remove("carta-volta");
    segundaCarta.classList.remove("carta-volta");
    primeiraCarta = null;
    segundaCarta = null;
}

function controlaJogo() {
    let tudo = document.querySelectorAll(".card.carta-virada")

    if (tudo.length === cartasEmJogo.length) alert(`Você ganhou em ${totalJogadas} jogadas!`)
}
