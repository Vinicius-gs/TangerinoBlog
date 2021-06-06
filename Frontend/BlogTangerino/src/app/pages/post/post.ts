export class Post {
    id: number;
    titulo: String;
    subTitulo: String;
    conteudo: String;
    autor: String;
    visibilidade: Boolean;
    data: String;
    constructor(id: number, titulo: String, subTitulo: String, conteudo: String, autor: String, visibilidade: Boolean, data: String, ){
        this.id = id;
        this.titulo = titulo;
        this.subTitulo = subTitulo;
        this.conteudo = conteudo;
        this.autor = autor;
        this.visibilidade = visibilidade;
        this.data = data;
    }
}