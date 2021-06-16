import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor() {}

  getContactList() {
    return [{
      id: 111,
      firstName: 'Yaswanth',
      lastName: 'Jilakara',
      contact: [{
        type: 'personal',
        number: 9999989999
      }],
      isFavourite: false
    },{
      id: 222,
      firstName: 'Ramu',
      lastName: 'Ikshvaku',
      contact: [{
        type: 'personal',
        number: 8888878888
      }],
      isFavourite: false
    },{
      id: 333,
      firstName: 'Seetha',
      lastName: 'Rama',
      contact: [{
        type: 'personal',
        number: 7777767777
      }],
      isFavourite: false
    },{
      id: 444,
      firstName: 'Radha',
      lastName: 'Krishna',
      contact: [{
        type: 'personal',
        number: 6666656666
      }],
      isFavourite: false
    },{
      id: 555,
      firstName: 'Janaki',
      lastName: 'Ramudu',
      contact: [{
        type: 'personal',
        number: 5555545555
      }],
      isFavourite: false
    },{
      id: 666,
      firstName: 'Yaswanth',
      lastName: 'Jilakara',
      contact: [{
        type: 'personal',
        number: 4444434444
      }],
      isFavourite: false
    }];
  }
}
