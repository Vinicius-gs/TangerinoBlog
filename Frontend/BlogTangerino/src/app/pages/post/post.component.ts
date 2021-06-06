import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']

})
export class PostComponent implements OnInit {
  post!: Post;
  posts : Post[] =[];

  constructor() { 
    this.consultaPost();

  }

  ngOnInit(): void {
  }

  limpaECarrega(){
    this.post = new Post(-2, "titulo","subTitulo","conteudo" ,"autor:", true, "data");
    this.consultaPost();
  }
  listar(){
    this.post = new Post(-2, "titulo","subTitulo","conteudo" ,"autor:", true, "data");
  }
  novo() {
    this.post.id = -1;
    this.post.titulo = "";
    this.post.subTitulo = "";
    this.post.conteudo = "";
    this.post.autor = "";
    this.post.visibilidade = true;
    this.post.data = "";
  }
  consultaPost(){
    axios
    .get("http://localhost:8080/blogTangerino/Post")
    .then((response: { data: { _embedded: { post: any; }; }; }) => {
      console.log(response);
      for (let o of response.data._embedded.post) {
        console.log(o);
        this.posts.push(new Post(o.id, o.titulo, o.subTitulo ,o.conteudo, o.autor, o.visibilidade, o.data));
      }
    })
    .catch((error: any) => {
      console.log(error);
    })
    .finally(() => {});
  }
  gravar() {
    if (this.post.id == -1) {
      axios
        .post("http://localhost:8080/blogTangerino/Post", {
          id: null,
          titulo: this.post.titulo,
          subTitulo: this.post.subTitulo,
          conteudo: this.post.conteudo,
          autor: this.post.autor,
          visibilidade: this.post.visibilidade,
          data: this.post.data,
        })
        .then(() => {
          this.limpaECarrega();
        })
        .catch((error: any) => {
          console.log(error);
        })
        .finally(() => {});
        window.location.reload();
    } else {
      axios
        .put("http://localhost:8080/blogTangerino/Post" + this.post.id, {
          id: this.post.id,
          titulo: this.post.titulo,
          subTitulo: this.post.subTitulo,
          conteudo: this.post.conteudo,
          autor: this.post.autor,
          visibilidade: this.post.visibilidade,
          data: this.post.data,
        })
        .then(() => {
          this.limpaECarrega();
        })
        .catch((error: any) => {
          console.log(error);
        })
        .finally(() => {});
        window.location.reload();
    }
  }  editar(o: Post) {
    this.post.id = o.id;
    this.post.titulo = o.titulo;
    this.post.subTitulo = o.subTitulo;
    this.post.conteudo = o.conteudo;
    this.post.autor = o.autor;
    this.post.visibilidade  = o.visibilidade;
    this.post.data  = o.data;
  } 
   excluir(index: number) {
    axios
      .delete("http://localhost:8080/blogTangerino/Post" + index)
      .then(() => {
        this.limpaECarrega();
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {});
      window.location.reload();
  }

}
