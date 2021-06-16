import { Component } from '@angular/core';
import { HttpRequestsService } from './services/http-requests/http-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-manager';
  constructor(private httpRequestService: HttpRequestsService){}

  contactList = this.httpRequestService.getContactList();
}
