import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuMobileTitleService } from '../../services/menu-mobile-title.service';

@Component({
  selector: 'menu-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

  constructor(public _menuMobileTitleService: MenuMobileTitleService){
  
  }


  openMenuMobile(): void {
  
    const menuMobile = document.getElementsByClassName('container__menu-mobile')[0];

    menuMobile.classList.add("abrir-menu");
  
  }

}


