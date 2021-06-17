import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() showList: Contact[];
  @Output() searchList = new EventEmitter();
  @Output() addContact = new EventEmitter();
  @Output() contactSelected = new EventEmitter<{contact: Contact, index: number}>();
  constructor() { }

  searchValue: string;
  ngOnInit(): void {
  }

  

}
