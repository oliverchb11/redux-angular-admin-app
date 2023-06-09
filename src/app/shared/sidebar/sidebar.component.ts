import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { removeKeyLocalStorage } from 'src/app/utils/localStorage/localStorage';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private router = inject(Router)
  private auth = inject(AuthService)
  public logout(){
    this.auth.logout().then((value)=> {
      this.router.navigateByUrl('/login')
    })
  }
}
