import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public name?: string | undefined = ''
  private store = inject(Store<AppState>)
  ngOnInit(): void {
    this.store.select('auth').subscribe(({user}) =>  this.name = user?.name)
  }

}
