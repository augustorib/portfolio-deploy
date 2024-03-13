import { Component } from '@angular/core';
import { SectionContactMeComponent } from '../section-contact-me/section-contact-me.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionContactMeComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
