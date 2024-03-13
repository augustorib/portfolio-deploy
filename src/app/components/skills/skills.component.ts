import { Component } from '@angular/core';
import { SpecialitiesBoxComponent } from '../specialities-box/specialities-box.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SpecialitiesBoxComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
