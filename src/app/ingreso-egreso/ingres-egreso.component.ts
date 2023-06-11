import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ingreEgreForm } from '../utils/pages/ingreso-egreso/ingreso-egreso-form';
import { EgreEgrerForm } from '../utils/pages/ingreso-egreso/ingreso-egreso-form.interface';
import { IngresoEgresoData } from '../interfaces/core/pages/ingreso-egreso/ingreso-egreso-data.interface';
import { EgresoIngresoService } from '../core/services/pages/egreso-ingreso.service';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { alert, alertn } from '../utils/alerts/alerts';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { isLoading, stopLoading } from '../shared/ui.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingres-egreso',
  templateUrl: './ingres-egreso.component.html',
  styleUrls: ['./ingres-egreso.component.css']
})
export class IngresEgresoComponent implements OnInit, OnDestroy{

  public form!: FormGroup;
  public ingreEgreFormData: EgreEgrerForm[] = ingreEgreForm;
  public loading: boolean = false;
  private fb = inject(FormBuilder);
  private store = inject(Store<AppState>);
  private ingresoEgresoService = inject(EgresoIngresoService);
  private subscription!: Subscription;

  ngOnInit(): void {
    this.formBuilder()
   this.subscription = this.store.select('ui').subscribe(loading => this.loading = loading.isLoading)
  }

  private formBuilder(): void{
    this.form = this.fb.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
      type: ['', Validators.required]
    })
  }

  async add(data: any){
    if(this.form.invalid) return
    this.store.dispatch(isLoading())
    const {description, amount, type, ...object} = data;
    object.uid = ''
    const ingresoEgreso = new IngresoEgreso(description, amount, type,  object.uid);
    console.log(ingresoEgreso);
    try {
     let response = await this.ingresoEgresoService.createIncomeAndExpenses(ingresoEgreso)
     console.log(response);
     if(response){
      this.store.dispatch(stopLoading())
      alertn('Informacion guardada correctamente', 'success');
      this.form.reset()
     }
    } catch (error) {
      alertn('Ocurrio un error a la hora de guardad la info', 'error');
        console.log('fallo');
        this.store.dispatch(stopLoading())
        
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
