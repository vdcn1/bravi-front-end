import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './storage/storage.service';
import { ContactsService } from './contacts/contacts.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    StorageService,
    ContactsService
  ]
})
export class ServicesModule { }
