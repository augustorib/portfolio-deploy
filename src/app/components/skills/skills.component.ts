import { Component } from '@angular/core';
import { SpecialitiesBoxComponent } from '../specialities-box/specialities-box.component';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SpecialitiesBoxComponent, SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
