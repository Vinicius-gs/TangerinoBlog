import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './pages/post/post.component';
import { AdicionarPostagemComponent } from './pages/adicionar-postagem/adicionar-postagem.component';
import { ModificarPostagemComponent } from './pages/modificar-postagem/modificar-postagem.component';
import { ExcluirPostagemComponent } from './pages/excluir-postagem/excluir-postagem.component';
import { VerificarPostagemComponent } from './pages/verificar-postagem/verificar-postagem.component';
import { ErroComponent } from './pages/erro/erro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostComponent,
    AdicionarPostagemComponent,
    ModificarPostagemComponent,
    ExcluirPostagemComponent,
    VerificarPostagemComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
