import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
