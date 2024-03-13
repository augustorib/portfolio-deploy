import { Component } from '@angular/core';
import { SocialBtnComponent } from '../social-btn/social-btn.component';

@Component({
  selector: 'main-content',
  standalone: true,
  imports: [SocialBtnComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
