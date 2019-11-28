import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestApp';

  // Option 1 
  // Use direct routerLinks in htmls
  // Option 2
  // homeRoute = 'home';
  // settingsRoute='settings';
  // Option 3
  routes = [
    {linkName:'Home' , url:'home'},
    {linkName:'Settings' , url:'settings'}
  ]
}
