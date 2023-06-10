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
export const alertn = (title: string, icon: SweetAlertIcon) => {
    Swal.fire({
        title,
        icon
    })
}