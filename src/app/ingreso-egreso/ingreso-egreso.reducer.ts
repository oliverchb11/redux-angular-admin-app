import { createReducer, on } from '@ngrx/store';
import { setIngresoEgreso, unSetIngresoEgreso } from './ingreso-egreso.actions';
import { IngresoEgreso } from '../models/ingreso-egreso.model';


export interface State {
    ingreso_greso: IngresoEgreso[] | null; 
}

export const initialState: State = {
    ingreso_greso: [],
}

const _ingresoEgresoReducer = createReducer(initialState,

    on(setIngresoEgreso, (state, {ingreso_greso}) => ({...state, ingreso_greso: [...ingreso_greso]})),
    on(unSetIngresoEgreso, (state) => ({...state, ingreso_greso: []})),

);

export function ingresoEgresoReducer(state: any, action: any) {
    return _ingresoEgresoReducer(state, action);
}