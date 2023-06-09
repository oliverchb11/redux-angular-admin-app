import { Routes } from "@angular/router";
import { DetailsComponent } from "../ingreso-egreso/details/details.component";
import { IngresEgresoComponent } from "../ingreso-egreso/ingres-egreso.component";
import { StatisticsComponent } from "../ingreso-egreso/statistics/statistics.component";

export const dasboardRoutes: Routes = [
    {
        path: 'ingreso-egreso',
        component: IngresEgresoComponent,
        
      },
      {
        path: 'detail',
        component: DetailsComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      }
]