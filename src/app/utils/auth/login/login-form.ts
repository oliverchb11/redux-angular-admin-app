import { LoginForm } from "./login-form.interface";


export const loginForm: LoginForm[] = [
    {
        placeholder: 'Email',
        formControlName: 'email',
        typeForm: 'email',
        valid: false,
        label: 'Correo'
    },
    {
        placeholder: 'Password',
        formControlName: 'password',
        typeForm: 'password',
        valid: false,
        label: 'Contraseña'
    }
]