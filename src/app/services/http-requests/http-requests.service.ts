import {
  Injectable
} from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor() {}

  getContactList(): Contact[] {
    const contacts = JSON.parse(sessionStorage.getItem('contacts'));
    if (contacts && contacts.length > 0) {
      return contacts
    } else {
      return [{
        id: 111,
        firstName: 'Yaswanth',
        lastName: 'Jilakara',
        contacts: [{
          type: 'personal',
          number: 9999989999
        }],
        isFavourite: false
      }, {
        id: 222,
        firstName: 'Ramu',
        lastName: 'Ikshvaku',
        contacts: [{
          type: 'personal',
          number: 8888878888
        }],
        isFavourite: false
      }, {
        id: 333,
        firstName: 'Seetha',
        lastName: 'Rama',
        contacts: [{
          type: 'personal',
          number: 7777767777
        }],
        isFavourite: false
      }, {
        id: 444,
        firstName: 'Radha',
        lastName: 'Krishna',
        contacts: [{
          type: 'personal',
          number: 6666656666
        }],
        isFavourite: false
      }, {
        id: 555,
        firstName: 'Janaki',
        lastName: 'Ramudu',
        contacts: [{
          type: 'personal',
          number: 5555545555
        }],
        isFavourite: false
      }, {
        id: 666,
        firstName: 'Yaswanth',
        lastName: 'Jilakara',
        contacts: [{
          type: 'personal',
          number: 4444434444
        }],
        isFavourite: false
      }];
    }
  }
}
