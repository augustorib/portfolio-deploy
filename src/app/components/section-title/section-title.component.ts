import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {
  @Input("sectionTitle")
  sectionTitle:string = ""

  splitedTitle:string = " "

  ngOnInit(){
    this.colorTitleWithTwoWords();
  }

  colorTitleWithTwoWords(){
    const titleArray = this.sectionTitle.split(" ");
  
    this.sectionTitle = titleArray[0];
    this.splitedTitle = titleArray[1];
    
  }
}


