import { createReducer, on } from "@ngrx/store";
import { listLenguajePrograming } from "./app.actions";


export const initialState:string[] = ['JS', 'JAVA'];

 const _listPrograming = createReducer(initialState,
    on(listLenguajePrograming, (state) => state)
    )

export function listPrograming(state: any, action: any){
    return _listPrograming(state, action)
}