import { Component } from '@angular/core';
import User, { Contacts } from '../models/user.model';
import { ContactsService } from '../services/contacts/contacts.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  userContacts: User[] = [];
  constructor(private contactsService: ContactsService,
              private storageService: StorageService) { }

  ngOnInit() {
    const user: any = this.storageService.getData('user');
    user.contacts.forEach((contact: any) => {
      console.log(contact);
      this.contactsService.getUser(contact.email).subscribe(
        (response) => {
          console.log(response)
          this.userContacts.push(new User(
            response.data.name,
            response.data.gender,
            response.data.email,
            response.data.contacts,
            response.data.avatar,
          ));
        }
      );
    });
  }
}
