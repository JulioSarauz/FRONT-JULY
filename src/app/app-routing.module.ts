import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'catalogo'
  },{
    path:'catalogo',
    component:CatalogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
