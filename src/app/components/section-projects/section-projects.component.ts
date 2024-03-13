import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ProjectBoxComponent } from '../project-box/project-box.component';

@Component({
  selector: 'section-projects',
  standalone: true,
  imports: [SectionTitleComponent, ProjectBoxComponent],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.css'
})
export class SectionProjectsComponent {

}
