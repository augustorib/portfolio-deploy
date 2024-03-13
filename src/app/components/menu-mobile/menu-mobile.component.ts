import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'menu-mobile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.css'
})
export class MenuMobileComponent {

  CloseMenuMobile(){
    const menuMobile = document.getElementsByClassName('container__menu-mobile')[0];

    menuMobile.classList.remove("abrir-menu")
  }
}
