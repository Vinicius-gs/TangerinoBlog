import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdicionarPostagemComponent } from './pages/adicionar-postagem/adicionar-postagem.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  { path:"", component: LoginComponent},
  { path:"Post", component: PostComponent},
  { path:"adicionar_postagem", component: AdicionarPostagemComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
