import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-box',
  standalone: true,
  imports: [],
  templateUrl: './project-box.component.html',
  styleUrl: './project-box.component.css'
})
export class ProjectBoxComponent {

  @Input("image")
  image:string = ""

  @Input("overlayText")
  overlayText:string = ""

  @Input("site")
  site:string = "https://augustorib.github.io/DIO_CarrefourWebDeveloper2022/"

  redirectToProjectSite(): void {
    window.location.href = this.site;
  }
}
