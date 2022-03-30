import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: "users", component: UsersComponent},
  {path: "user/:id", component: UserComponent},
  {path: "", redirectTo: "/users", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
