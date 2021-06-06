import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  { path:"", component: LoginComponent},
  { path:"Post", component: PostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
