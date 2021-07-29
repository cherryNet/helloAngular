import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HelloComponent} from './hello/hello.component'
import {BComponent} from "./b/b.component"
import {AComponent} from "./a/a.component"
import {CComponent} from "./compoment/c/c.component"

const routes: Routes = [
  {path:'',component: HelloComponent},
  {path:'tabB/:id',component:BComponent},
  {path:'tabA',component:AComponent},
  {path:'tabC',component:CComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
