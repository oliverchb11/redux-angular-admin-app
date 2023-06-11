import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { EgresoIngresoService } from 'src/app/core/services/pages/egreso-ingreso.service';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';
import { isLoading, stopLoading } from 'src/app/shared/ui.actions';
import { alert, alertAndError, alertn } from 'src/app/utils/alerts/alerts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {


  private store = inject(Store<AppState>);
  private egresoIngresoSerive = inject(EgresoIngresoService);
  public ingresoEgreso: IngresoEgreso[] = [];
  public isLoading = true;
  public ingresosSubs!: Subscription
  public loadingSubs!: Subscription

  ngOnInit(): void {

  this.ingresosSubs =  this.store.select('ingreso_egreso').subscribe(({ingreso_greso}) => {
        console.log(ingreso_greso);
        
        this.ingresoEgreso = ingreso_greso
      })
   this.loadingSubs =   this.store.select('ui').subscribe(({isLoading}) => {
        this.isLoading = isLoading
      })

  }


  public deleteItem(id: string | undefined){
    alertAndError('Seguro desea eliminar este elemento', 'question', () => {
      alertn('Detalle eliminado', 'success')
      this.egresoIngresoSerive.deleteItem(id)
    }, () => {
      console.log('no eliminar');
    })
  }

  ngOnDestroy(): void {
   this.ingresosSubs.unsubscribe()
   this.loadingSubs.unsubscribe()
  }
}
