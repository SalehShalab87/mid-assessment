import { Component, EventEmitter, Input, input, Output, ViewChild, viewChild } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { GetUnveristyComponent } from './pages/get-unveristy/get-unveristy.component';
import { computeMsgId } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProfileComponent,
    ContactUsComponent,
    AboutUsComponent,
    AddUserComponent,
    GetUnveristyComponent,
    CommonModule,
    LoginComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ActivePage = 'My Profile';
  isloggedin = false;
  username = 'guest';
 

  onChangePage(page: string): void {
    this.ActivePage = page;
  }

  onLoginToggle(username:string): void {
    this.ActivePage ='Login';
    this.isloggedin = !this.isloggedin;
    if (!this.isloggedin) {
      this.username = 'guest'; 
    } else {
      this.username = username; 
    }
  }
 

}
