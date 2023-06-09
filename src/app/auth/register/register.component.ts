import { Component, inject, OnInit , AfterViewInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { registerData } from 'src/app/interfaces/core/auth/register/register-data.interface';
import { alert } from 'src/app/utils/alerts/alerts';
import { registerForm } from 'src/app/utils/auth/register/register-form';
import { RegisterForm } from 'src/app/utils/auth/register/register-form.interface';
import { CREATE_OK, CREATE_USER_EXITS } from 'src/app/utils/const';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit{
  public loader: boolean = false
  public registerForm: RegisterForm[] = registerForm
  public form!: FormGroup;
  private _fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  ngOnInit(): void {
    this.formBuilder()
  }


  ngAfterViewInit(): void {

  }

  private formBuilder(): void{
    this.form = this._fb.group({
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }


  get validUser(): boolean{
    return this.form.get('user')?.valid!;
  }


  async register(data: registerData): Promise<void>{
    this.loader = true;
    if(this.form.invalid) return
    try {
      let response =  await this.authService.createUser(data);
      console.log(response);
      
      alert(CREATE_OK, 'success', () => {
        this.router.navigateByUrl('/login')
      })
      this.loader = false;
      this.form.reset()
    } catch (error: any) {
      alert(CREATE_USER_EXITS, 'error', () => {
        this.router.navigateByUrl('/register');
        this.loader = false;
      })
    }
    
  }

}
