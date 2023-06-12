import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { IngresoEgresoRoutingModule } from './ingreso-egreso-routing.module';
import { DasboardComponent } from '../dasboard/dasboard.component';
import { IngresEgresoComponent } from './ingres-egreso.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ingresoEgresoReducer } from './ingreso-egreso.reducer';


@NgModule({
  declarations: [
    DasboardComponent,
    IngresEgresoComponent,
    StatisticsComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    IngresoEgresoRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    NgChartsModule,
    StoreModule.forFeature('ingreso_egreso', ingresoEgresoReducer)
  ]
})
export class IngresoEgresoModule { }
