const cobra = {
    tamanho:10,
    cor:"black",
    velocidade:10,
    vida:3,
    x:400,
    y:260,
    direcao:"direita",
    desenhar(){
        ctx.fillStyle=this.cor;
        ctx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    }, 
    mover(){
        if (this.direcao=="direita") this.x++;
        if (this.direcao=="esquerda") this.x--;
        if (this.direcao=="baixo") this.y++;
        if (this.direcao=="cima") this.y--;
    }

}