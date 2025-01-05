import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser, faAddressBook, faFileAlt, faLightbulb, faProjectDiagram, faHome, faTools, faBars } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
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

    contact = {
      name: '',
      email: '',
      message: ''
    };
  
    constructor(private contactService: ContactService, private http: HttpClient) {}
  
    sendEmail(contactForm: NgForm) {
      if (contactForm.valid) {
        this.contactService.sendContactForm(this.contact)
          .subscribe({
            next: (response: any) => {
              console.log('Email sent:', response);
              alert('Message sent successfully!');
              contactForm.reset();
            },
            error: (error: any) => {
              console.error('Error:', error);
              alert('Failed to send the message. Please try again.');
            }
          });
      }
    }
    

}
