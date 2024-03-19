import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SocialBtnComponent } from '../social-btn/social-btn.component';


@Component({
  selector: 'section-about',
  standalone: true,
  imports: [SectionTitleComponent, SocialBtnComponent],
  templateUrl: './section-about.component.html',
  styleUrl: './section-about.component.css'
})
export class SectionAboutComponent {

  pathTecnologieImage:string = "../../../assets/img/tecnologies/"
}
