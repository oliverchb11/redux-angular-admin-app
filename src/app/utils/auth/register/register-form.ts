import { RegisterForm } from "./register-form.interface";

export const registerForm: RegisterForm[] = [
    {
        placeholder: 'Usuario',
        formControlName: 'user',
        typeForm: 'text',
        valid: false
    },
    {
        placeholder: 'Email',
        formControlName: 'email',
        typeForm: 'email',
        valid: false
    },
    {
        placeholder: 'Password',
        formControlName: 'password',
        typeForm: 'password',
        valid: false
    }
]