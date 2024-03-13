import { Component } from '@angular/core';
import { SectionProjectsComponent } from '../section-projects/section-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
