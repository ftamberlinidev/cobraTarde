function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    alimento.desenhar();
    if (alimento.teveColisao(cobra)){
        placar.pontuacao+=alimento.valor;
        alimento = new Alimento(10);
    }
    requestAnimationFrame(jogar)
}
let alimento = new Alimento(10,50,600,200);
jogar();


document.addEventListener("keydown",(evento) =>{  
    if (evento.key== "8") cobra.direcao="cima";      
    if (evento.key== "6") cobra.direcao="direita";
    if (evento.key== "2") cobra.direcao="baixo";
    if (evento.key== "4") cobra.direcao="esquerda";
})
