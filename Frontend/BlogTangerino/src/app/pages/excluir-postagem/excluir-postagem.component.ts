import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-postagem',
  templateUrl: './excluir-postagem.component.html',
  styleUrls: ['./excluir-postagem.component.css']
})
export class ExcluirPostagemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  excluir() {
    alert('Publicação excluida com sucesso!');
  }

}
