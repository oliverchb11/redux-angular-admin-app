import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import * as ui from 'src/app/shared/ui.actions';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy{
  public name: string = ''
  private subscribe!: Subscription 
  public loader: boolean = false
  private router = inject(Router)
  private auth = inject(AuthService)
  private store = inject(Store<AppState>);
  ngOnInit(): void {
    this.subscribe = this.store.select('ui').subscribe((next)=> this.loader = next.isLoading)
    this.subscribe = this.store.select('auth').subscribe(({user})=>  this.name = user?.name)
  }

  public logout(){
    this.store.dispatch(ui.isLoading())

    this.auth.logout().then((value)=> {
      this.store.dispatch(ui.stopLoading())
      this.router.navigateByUrl('auth/login')
    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }
}
