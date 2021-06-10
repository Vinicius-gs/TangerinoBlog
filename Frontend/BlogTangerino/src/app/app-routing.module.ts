import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdicionarPostagemComponent } from './pages/adicionar-postagem/adicionar-postagem.component';
import { ErroComponent } from './pages/erro/erro.component';
import { ExcluirPostagemComponent } from './pages/excluir-postagem/excluir-postagem.component';
import { ModificarPostagemComponent } from './pages/modificar-postagem/modificar-postagem.component';
import { PostComponent } from './pages/post/post.component';
import { VerificarPostagemComponent } from './pages/verificar-postagem/verificar-postagem.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path:"login", component: LoginComponent},
  { path:"Post", component: PostComponent},
  { path:"adicionar_postagem", component: AdicionarPostagemComponent},
  { path:"modificar_postagem", component: ModificarPostagemComponent},
  { path:"excluir_postagem", component: ExcluirPostagemComponent},
  { path:"verificar_postagem", component: VerificarPostagemComponent},
  {path: 'erro', component: ErroComponent},
  { path: '**', redirectTo: '/erro' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
