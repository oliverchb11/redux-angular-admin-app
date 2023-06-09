import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { IngresEgresoComponent } from './ingreso-egreso/ingres-egreso.component';
import { dasboardRoutes } from './dasboard/dasboard.routes';
import { sesionGuard } from './guard/sesion.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: DasboardComponent,
    children: dasboardRoutes,
    canActivate: [sesionGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
