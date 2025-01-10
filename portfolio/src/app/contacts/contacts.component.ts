import { FormControl, NgForm, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { NotificationService } from '../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser, faAddressBook, faFileAlt, faLightbulb, faProjectDiagram, faHome, faTools, faBars } from '@fortawesome/free-solid-svg-icons';
import { validateEmail } from '../email-validator';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
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
  emailFormControl!: FormControl;
  contact = {
    name: '',
    email: '',
    message: ''
  };
   

  constructor(
    private contactService: ContactService,
    private notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
      validateEmail()
    ]);
  }

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
