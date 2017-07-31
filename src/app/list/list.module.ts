import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule { }
