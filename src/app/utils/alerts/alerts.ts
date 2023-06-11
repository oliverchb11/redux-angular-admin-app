import Swal, { SweetAlertIcon } from "sweetalert2";

export const alert = (title: string, icon: SweetAlertIcon, isConfirmed: Function) => {
    Swal.fire({
        title,
        icon
    }).then((value)=> {
        if(value.isConfirmed){
            isConfirmed()
        }
    })
}
export const alertAndError = (title: string, icon: SweetAlertIcon, isConfirmed: Function, isDismis: Function) => {
    Swal.fire({
        title,
        icon,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonColor: '#E03030',
        confirmButtonColor: '#30E043'
    }).then((value)=> {
        if(value.isConfirmed){
            isConfirmed()
        }else{
            isDismis()
        }
    })
}
export const alertn = (title: string, icon: SweetAlertIcon) => {
    Swal.fire({
        title,
        icon
    })
}