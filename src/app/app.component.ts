import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = '04-redux-admin-app';
  private auth = inject(AuthService)

  ngOnInit(): void {
    this.auth.initAuthListener()
  }
}

