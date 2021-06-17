import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  @Input() displayContact;
  @Output() editValues = new EventEmitter();
  @Output() changeFavourite = new EventEmitter();
  @Output() deleteContact = new EventEmitter();
  @Output() contactSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
