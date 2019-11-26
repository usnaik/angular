import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})

export class AddressCardComponent implements OnInit {

  @Input('user') user:User;
  isCollapsed:boolean = true;

  constructor() {
   }

  ngOnInit() {
  }

  onExpandCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
