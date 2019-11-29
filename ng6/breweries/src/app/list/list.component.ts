import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  brews:Object;

  constructor(private _http: MyHttpService) { }

  ngOnInit() {
    this._http.getBreweries().subscribe((response) => {
      this.brews = response;
      console.log(this.brews);
    });
  }
}