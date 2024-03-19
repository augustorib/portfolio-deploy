import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuMobileTitleService } from '../../services/menu-mobile-title.service';


@Component({
  selector: 'menu-mobile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.css'
})
export class MenuMobileComponent {
  
  constructor(private _menuMobileTitleService: MenuMobileTitleService) {
      
  }

  closeMenuMobile(){
    const menuMobile = document.getElementsByClassName('container__menu-mobile')[0];

    menuMobile.classList.remove("abrir-menu")
  }

  getClickedOption(menuOption:string): void{
    this._menuMobileTitleService.menuMobileTitle = menuOption;
  }
}
