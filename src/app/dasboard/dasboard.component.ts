import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as auth from '../auth/auth.actions';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit{





  ngOnInit(): void {
  
  }


  }

