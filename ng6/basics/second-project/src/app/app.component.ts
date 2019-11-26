import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  user: User;
  inputText: string = "Hi There!";
 
  constructor(){
    this.user = new User();
    this.user.name = 'Jonty Rhodes'; 
    this.user.title = 'Cricket Coach';
    this.user.address = '1234 Main Street, City, State, 80302';
    this.user.phone= [
      '123-456-7890',
      '123-456-7891',
    ];
  }
  
}
