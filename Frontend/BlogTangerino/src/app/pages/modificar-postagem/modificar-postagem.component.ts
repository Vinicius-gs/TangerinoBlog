import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-postagem',
  templateUrl: './modificar-postagem.component.html',
  styleUrls: ['./modificar-postagem.component.css']
})
export class ModificarPostagemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alterar() {
    alert('Alterações realizadas com sucesso!');
  }

}
