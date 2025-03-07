import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faGithub, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faFileAlt,faProjectDiagram,faHome,faTools, faUser, faLightbulb, faBars} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faUser = faUser;
  faAddressBook= faAddressBook;
  faFileAlt = faFileAlt;
  faLightbulb = faLightbulb
  faProjectDiagram = faProjectDiagram;
  faHome = faHome;
  faTools = faTools;
  status = false;
  faBars = faBars;

  navigateWithParam(section: string): void {
    this.router.navigate([section]); 
    this.scrollToSection(section);
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
