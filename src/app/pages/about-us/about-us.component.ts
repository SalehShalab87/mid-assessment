import { Component } from '@angular/core';
import { LogoComponent } from "../../layout/logo/logo.component";

@Component({
  selector: 'app-about-us',
  imports: [LogoComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  email = 'info@iih.com';
}
