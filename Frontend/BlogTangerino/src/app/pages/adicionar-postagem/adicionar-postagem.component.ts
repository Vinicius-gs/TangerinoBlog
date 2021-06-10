import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-postagem',
  templateUrl: './adicionar-postagem.component.html',
  styleUrls: ['./adicionar-postagem.component.css']
})
export class AdicionarPostagemComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  salvar() {
    alert('Publicado com sucesso!');
  }
}
