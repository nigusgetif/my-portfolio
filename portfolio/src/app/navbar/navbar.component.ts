import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faBars = faBars;
  menuOpen = false; // State to track if the menu is open

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle menu state
  }

}
