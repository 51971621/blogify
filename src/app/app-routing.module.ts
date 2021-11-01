import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatPostComponent } from './creat-post/creat-post.component';

const routes: Routes = [{path: "add",component: CreatPostComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
