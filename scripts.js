let numeroCartas;

// Aqui, um laço do... while que extrai a quantidade de cartas, não permitindo que o jogador comece o jogo caso o número seja ímpar
// ou maior que 14 ou menor que 4
let invalid = true;
do {
    numeroCartas = Number(prompt("Com quantas cartas você quer jogar?"))

    if (numeroCartas % 2 === 0 && 4 <= numeroCartas && numeroCartas <= 14) invalid = false;
} while (invalid);

// Esse bloco declara as cartas possíveis de serem jogadas
// Dividi em duas linhas para ficar mais aesthetical, declarei variáveis para ser mais legível
let cartaBobRoss = "bobrossparrot", cartaExplody = "explodyparrot", cartaFiesta = "fiestaparrot", cartaMetal = "metalparrot";
let cartaRevertIt = "revertitparrot", cartaTriplets = "tripletsparrot", cartaUnicorn = "unicornparrot";
const listaCartas = [cartaBobRoss, cartaExplody, cartaFiesta, cartaMetal, cartaRevertIt, cartaTriplets, cartaUnicorn];

// Este bloco cria lista de cartas que irão para jogo e em seguida as embaralha
function comparador() { 
	return Math.random() - 0.5; 
}
const cartasEmJogo = [];
let cartaAtual;
for (let i = 0; i < numeroCartas/2; i++){
    cartaAtual = `<li class="card" onclick="jogada(this)">
    <div class="front-face face">
        <img src="arquivos-uteis/front.png" alt="">
    </div>
    <div class="back-face face"> 
        <img src="arquivos-uteis/${listaCartas[i]}.gif" alt="">
    </div>
    </li>`;
    cartasEmJogo.push(cartaAtual)
    cartasEmJogo.push(cartaAtual);
}
cartasEmJogo.sort(comparador); 

// Finalmente, este bloco põe as cartas para jogo efetivamente, agora embaralhadas
const cartas = document.querySelector("ul");
let contador = 0;
for (let i = 0; i < numeroCartas; i++) {
    cartas.innerHTML += cartasEmJogo[i];
}

// Função que recebe a carta escolhida pelo usuário. Caso ele tenha selecionado apenas uma, ela espera a segunda seleção.
// Do contrário, ela aguarda uma segunda jogada e, em seguida, compara as duas
function jogada(carta) {

}