import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'menu-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  
  constructor(){
  
  }

  OpenMenuMobile() {
  
    const menuMobile = document.getElementsByClassName('container__menu-mobile')[0];

    menuMobile.classList.add("abrir-menu");
  
  }
}


