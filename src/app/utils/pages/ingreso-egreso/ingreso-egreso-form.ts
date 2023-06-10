import { EgreEgrerForm } from "./ingreso-egreso-form.interface";

export const ingreEgreForm: EgreEgrerForm[] = [
    {
        placeholder: 'Descripción',
        formControlName: 'description',
        typeForm: 'text',
        label: 'Descripción'
    },
    {
        placeholder: 'Monto',
        formControlName: 'amount',
        typeForm: 'number',
        label: 'Monto'
    }

]