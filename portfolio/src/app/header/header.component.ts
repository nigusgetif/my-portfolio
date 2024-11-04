import { Component } from '@angular/core';
import { faLinkedin, faGithub, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faFileAlt,faProjectDiagram,faHome,faTools, faUser, faLightbulb, faBars} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
addToggle()
{
  this.status = !this.status;       
}
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

}
