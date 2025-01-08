import { NgForm } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { NotificationService } from '../services/notification.service';
import { Component } from '@angular/core';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser, faAddressBook, faFileAlt, faLightbulb, faProjectDiagram, faHome, faTools, faBars } from '@fortawesome/free-solid-svg-icons';

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
  faAddressBook = faAddressBook;
  faFileAlt = faFileAlt;
  faLightbulb = faLightbulb;
  faProjectDiagram = faProjectDiagram;
  faHome = faHome;
  faTools = faTools;
  faBars = faBars;

  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(
    private contactService: ContactService,
    private notificationService: NotificationService
  ) {}

  sendEmail(contactForm: NgForm) {
    if (contactForm.valid) {
      this.contactService.sendContactForm(this.contact).subscribe({
        next: (response: any) => {
          console.log('Email sent:', response);
          this.notificationService.showSuccess('Message sent successfully!');
          contactForm.reset();
        },
        error: (error: any) => {
          console.error('Error:', error);
          this.notificationService.showError('Failed to send the message. Please try again.');
        },
      });
    }
  }
}
