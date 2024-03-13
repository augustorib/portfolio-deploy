import { Component,  Input } from '@angular/core';


@Component({
  selector: 'social-btn',
  standalone: true,
  imports: [],
  templateUrl: './social-btn.component.html',
  styleUrl: './social-btn.component.css'
})
export class SocialBtnComponent {
  @Input("icon")
  icon:string = ""

  @Input("site-link")
  site:string = ""
  
 

  redirectToExternalPage(): void{
   window.location.href = this.site
  }
}
