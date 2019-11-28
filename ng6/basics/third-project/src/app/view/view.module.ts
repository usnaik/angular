import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCompComponent } from './view-comp/view-comp.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ViewCompComponent],
  imports: [CommonModule,FormsModule],
  exports: [ViewCompComponent]
})

export class ViewModule { }
