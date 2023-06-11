import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as auth from '../auth/auth.actions';
import { Subscription, filter, switchMap } from 'rxjs';
import { EgresoIngresoService } from '../core/services/pages/egreso-ingreso.service';
import { setIngresoEgreso } from '../ingreso-egreso/ingreso-egreso.actions';
import { isLoading, stopLoading } from '../shared/ui.actions';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit, OnDestroy{



  private store = inject(Store<AppState>);
  private egresoIngresoService = inject(EgresoIngresoService);
  public unSubs!: Subscription

  ngOnInit(): void {
    this.store.dispatch(isLoading())
   this.unSubs = this.store.select('auth')
    .pipe(
      filter((value: any) => value.user !== null),
      switchMap(({user})=> this.egresoIngresoService.getItems(user.uid))
    ).subscribe((data: any[]) => {
      this.store.dispatch(setIngresoEgreso({ingreso_greso: data}))
      this.store.dispatch(stopLoading())
    })
  }


  ngOnDestroy(): void {
    this.unSubs.unsubscribe()
  }



  }

