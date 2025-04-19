import { Component, EventEmitter, Output } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-sidebar',
  imports: [LogoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarContent = ['My Profile','Contact Us','About Us','Add User','Get Universties'];
  @Output() ActivePage = new EventEmitter<string>();

  onPageChange(page :string){
    this.ActivePage.emit(page);
    
  }

}
