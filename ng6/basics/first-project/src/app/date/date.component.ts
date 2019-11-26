import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})

export class DateComponent implements OnInit {

  timeNow : string;
  constructor() {
    setInterval( () => {
      let currentDate = new Date();    
      this.timeNow = `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`;  
    } ,1000)
  }

  ngOnInit() {

  } 

}
