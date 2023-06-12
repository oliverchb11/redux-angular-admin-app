import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dasboardRoutes } from '../dasboard/dasboard.routes';
import { DasboardComponent } from '../dasboard/dasboard.component';


const routes: Routes = [
  {
    path: '',
    component: DasboardComponent,
    children: dasboardRoutes
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoEgresoRoutingModule { }
