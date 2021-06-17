import {
  Component
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  HttpRequestsService
} from './services/http-requests/http-requests.service';
import {
  Contact
} from './interfaces/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchValue: string;
  displayContact: Contact;
  fb: FormBuilder = new FormBuilder;
  items: FormArray;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  pageMode: string = 'add';
  selectedItem = 0;
  contactForm: FormGroup = this.fb.group({
    firstName: ['', [
      Validators.required,
    ]],
    lastName: ['', [
      Validators.required,
    ]],
    contacts: this.fb.array([this.createItem()])
  })
  contactList: Contact[]
  showList: Contact[]
  constructor(private httpRequestService: HttpRequestsService) {}

  ngOnInit() {
    this.contactList = this.httpRequestService.getContactList();
    this.showList = this.contactList;
  }


  createItem(): FormGroup {
    return this.fb.group({
      type: ['', [
        Validators.required,
      ]],
      number: ['', [
        Validators.required
      ]]
    });
  }

  addContactField(): void {
    this.items = this.contactForm.get('contacts') as FormArray;
    this.items.push(this.createItem());
  }

  addContact() {
    this.pageMode = 'add';
    this.contactForm.reset();
  }

  contactSelected(data, index) {
    this.selectedItem = index;
    this.pageMode = 'display';
    this.displayContact = data;
  }

  searchContacts(value) {
    let results = this.contactList.filter(function (item) {
      return JSON.stringify(item).toLowerCase().includes(value);
    });
    this.showList = [...results];
  }

  onSubmit() {
    if (this.contactForm.valid) {
      let formValues = this.contactForm.value;
      if (this.pageMode === 'add') {
        this.showList.push(formValues);
      } else if (this.pageMode === 'edit') {
        for (let index = 0; index < this.showList.length; index++) {
          if (this.showList[index].id === this.displayContact.id) {
            this.showList[index].firstName = formValues.firstName;
            this.showList[index].lastName = formValues.lastName;
            this.showList[index].contacts = this.getValidContacts(formValues.contacts);
          }
        }
      }
      // this.contactForm.submit = false;
      this.contactForm.reset();
      sessionStorage.setItem('contacts', JSON.stringify(this.showList));
      this.pageMode = 'display';
      this.displayContact = this.showList[this.showList.length-1]
    }
  }

  getValidContacts(contacts) {
    let valid = [];
    for (let index = 0; index < contacts.length; index++) {
      const element = contacts[index];
      if (element.type != ' ' && element.number != '') {
        valid.push(element)
      }
    }
    return valid;
  }

  loadValues(data) {
    this.pageMode = 'edit';
    this.contactForm.patchValue({
      firstName: data.firstName,
      lastName: data.lastName,
      contacts: data.contacts
    });
  }

  delete() {
    this.showList.splice(this.selectedItem, 1);
    this.pageMode = 'add';
  }

  addtoFavourite(value) {
    this.showList[this.selectedItem].isFavourite = value;
    sessionStorage.setItem('contacts', JSON.stringify(this.showList));
  }
}
