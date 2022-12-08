import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../services/contacts/contacts.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // html elems
  title = 'bravi-test';
  userFormGroup: FormGroup = new FormGroup({});

  constructor(private contactService: ContactsService, 
              private route: ActivatedRoute, 
              private router: Router,
              private storageService: StorageService) { }

  ngOnInit() {
    this.userFormGroup = new FormGroup({
      email: new FormControl(''),
    });
  }

  onSubmit() {
    this.contactService.getUser(this.userFormGroup.value.email).subscribe(
      (response) => {
        console.log(this.route);
        this.router.navigate(['./user'], {relativeTo: this.route}).then((resolved) => {
          console.log(resolved);
          this.storageService.setData('user', response.data);
          }).catch((error) => {
            console.log(error);
          });
      }
    );
  }
}
