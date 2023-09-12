import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CanActivate } from '@angular/router';
import { guardrouteGuard } from './guardroute.guard';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'Users', component: UserComponent, canActivate:[guardrouteGuard], data: {roles: ['user']}},
  {path: 'post', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
