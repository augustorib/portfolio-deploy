import { Component } from '@angular/core';
import { SocialBtnComponent } from '../social-btn/social-btn.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialBtnComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
