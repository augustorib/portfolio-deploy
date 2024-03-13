import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'section-contact-me',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './section-contact-me.component.html',
  styleUrl: './section-contact-me.component.css'
})
export class SectionContactMeComponent {

}
