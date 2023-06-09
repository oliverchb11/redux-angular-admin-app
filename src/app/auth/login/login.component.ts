import { Component, inject, OnInit ,OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import * as ui from 'src/app/shared/ui.actions';
import { alert } from 'src/app/utils/alerts/alerts';
import { loginForm } from 'src/app/utils/auth/login/login-form';
import { LoginForm } from 'src/app/utils/auth/login/login-form.interface';
import { setLocalStorage } from 'src/app/utils/localStorage/localStorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  public loginForm: LoginForm[] = loginForm
  public loader: boolean = false
  public form !: FormGroup;
  private subscribe!: Subscription 
  private _fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private store = inject(Store<AppState>);
  
  ngOnInit(): void {
    this.formBuilder()
    this.subscribe = this.store.select('ui').subscribe((next)=> this.loader = next.isLoading)
  }

  private formBuilder(): void{
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  async login(data: any){
    this.store.dispatch(ui.isLoading())
    if(this.form.invalid) return;
      try {
      let response = await this.auth.login(data);
      if(response.operationType !== "signIn") return
      this.store.dispatch(ui.stopLoading())
      this.router.navigateByUrl('/')
    } catch (error) {
      alert('Email y/o password incorrectos', 'error', ()=> {
        this.router.navigateByUrl('/login')
      })
      }
  }


  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }
}
