import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  constructor(private contactsService: ContactsService) {
    
  }
}
