import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-box',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-box.component.html',
  styleUrl: './project-box.component.css'
})
export class ProjectBoxComponent {

  @Input("image")
  image:string = ""

  @Input("overlayText")
  overlayText:string = ""

  @Input("site")
  site:string = ""

  @Input("tecnologies")
  tecnologies:string[] = []

  redirectToProjectSite(): void {
    window.location.href = this.site;
  }
}
