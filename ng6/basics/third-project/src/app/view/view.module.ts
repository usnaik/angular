import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCompComponent } from './view-comp/view-comp.component';



@NgModule({
  declarations: [ViewCompComponent],
  imports: [CommonModule],
  exports: [ViewCompComponent]
})

export class ViewModule { }
