import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { listPrograming } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { IngresEgresoComponent } from './ingreso-egreso/ingres-egreso.component';

import { DetailsComponent } from './ingreso-egreso/details/details.component';
import { StatisticsComponent } from './ingreso-egreso/statistics/statistics.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DasboardComponent,
    IngresEgresoComponent,
    StatisticsComponent,
    DetailsComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({list: listPrograming}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
