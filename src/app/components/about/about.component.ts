import { Component } from '@angular/core';
import { SectionAboutComponent } from '../section-about/section-about.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionAboutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
