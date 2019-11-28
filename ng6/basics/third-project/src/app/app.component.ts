import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // constructor(private svc: TestService, private http: HttpClient) {
  //   svc.printToConsole("Call from service method!");
  // }

  // ngOnInit (){
  //   let obs = this.http.get ('https://api.github.com/users/usnaik');
  //   obs.subscribe((response)=> console.log(response));
  // }

}
