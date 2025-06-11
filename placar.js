const placar = {
    largura: 800,
    altura:60,
    corFundo:"blue",
    corTexto:"white",
    pontuacao:0,
    desenhar(){
        ctx.fillStyle=this.corFundo;
        ctx.fillRect(0,0,this.largura,this.altura);
        ctx.fillStyle=this.corTexto;
        ctx.textBaseline="middle";
        ctx.textAlign="center";
        ctx.font= "20px Fantasy";
        ctx.fillText("Jogo da Cobra",400,30);
        ctx.font= "14px Fantasy";
        ctx.textAlign="left";
        ctx.fillText(this.pontuacao+" pontos",10,45);
        ctx.textAlign="right";
        ctx.fillText(cobra.vida+" vidas",790,45);
    }
}
