class Alimento extends ObjetoJogo{
    arquivo = "uva.png";
    imagem = new Image();
    constructor(valor,...args){
        super(args);
        this.imagem.src=this.arquivo;
        this.valor=valor;
    }
    desenhar(){
        ctx.drawImage(this.imagem,this.x,this.y,
                      this.tamanho,this.tamanho);
    }
}

