import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import User, { Contacts } from '../models/user.model';
import { ContactsService } from '../services/contacts/contacts.service';
import { StorageService } from '../services/storage/storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  
  user: User = new User('', '', '', [new Contacts('')], '');
  userFormGroup: FormGroup = new FormGroup({});
  constructor(
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ){

  }

  ngOnInit(){

    this.userFormGroup = new FormGroup({
      gender: new FormControl(''),
    });

    const user = this.storageService.getData('user');
    this.user = new User(
      user.name,
      user.gender,
      user.email,
      user.contacts,
      user.avatar
    )

    this.userFormGroup.get('gender')?.setValue(this.user.getGender);
  }

  loadContactList(){
    this.router.navigate(['contact-list'], {relativeTo: this.route});
  }

  onSubmit(){
    this.user.setGender = this.userFormGroup.get('gender')?.value;
    this.contactsService.updateUser(this.user).subscribe(
      (response) => {
        console.log(response);
        if(response.error) {
          Swal.fire({
            title: 'Error!',
            text: response.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
          return;
        }
        Swal.fire({
          title: 'Success!',
          text: 'Your gender has been updated!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }
    );
  }
}
