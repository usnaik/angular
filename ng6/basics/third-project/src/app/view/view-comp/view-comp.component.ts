import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.scss']
})

export class ViewCompComponent implements OnInit {

  userName : string="";
  response : any;
  constructor(private http: HttpClient) { }

  ngOnInit() { }

  searchUser() {
    this.http.get('https://api.github.com/users/'+this.userName)
      .subscribe((response) => {
        this.response= response;
        console.log(response)
      });
  }

}
