import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { SpecialitiesBoxComponent } from '../specialities-box/specialities-box.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SectionAboutComponent } from '../section-about/section-about.component';
import { SectionProjectsComponent } from '../section-projects/section-projects.component';
import { SectionContactMeComponent } from '../section-contact-me/section-contact-me.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, MainContentComponent, SpecialitiesBoxComponent, SectionTitleComponent,
  SectionAboutComponent, SectionProjectsComponent, SectionContactMeComponent, FooterComponent, MenuMobileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
