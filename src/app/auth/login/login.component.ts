import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { alert } from 'src/app/utils/alerts/alerts';
import { loginForm } from 'src/app/utils/auth/login/login-form';
import { LoginForm } from 'src/app/utils/auth/login/login-form.interface';
import { setLocalStorage } from 'src/app/utils/localStorage/localStorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm: LoginForm[] = loginForm
  public loader: boolean = false
  public form !: FormGroup;
  private _fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  
  ngOnInit(): void {
    this.formBuilder()
  }

  private formBuilder(): void{
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  async login(data: any){
    this.loader = true;
    if(this.form.invalid) return;
      try {
      let response = await this.auth.login(data);
      if(response.operationType !== "signIn") return
      this.loader = false;
      this.router.navigateByUrl('/')
    } catch (error) {
      alert('Email y/o password incorrectos', 'error', ()=> {
        this.router.navigateByUrl('/login')
      })
      }
  }
}
