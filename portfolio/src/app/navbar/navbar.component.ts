import { Component } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faBars, faFileAlt, faLightbulb, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faBars = faBars;
  faUser = faUser;
  faLightbulb = faLightbulb;
  faProjectDiagram = faProjectDiagram;
  faFileAlt = faFileAlt;
  faAddressBook = faAddressBook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
