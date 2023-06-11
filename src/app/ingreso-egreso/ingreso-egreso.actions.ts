import { createAction, props } from '@ngrx/store';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

export const setIngresoEgreso = createAction('[INGRESO EGRESO] set IngresoEgreso', props<{ingreso_greso: IngresoEgreso[]}>());
export const unSetIngresoEgreso = createAction('[INGRESO EGRESO] un set IngresoEgreso');