import { Component } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
  selector: 'app-contact-form',
  imports: [AboutUsComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

}
