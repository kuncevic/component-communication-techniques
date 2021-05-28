import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InputOutputComponent } from './input-output.component';
import { LittleChildComponent } from './little-child/little-child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    InputOutputComponent,
    LittleChildComponent,
  ],
  imports: [CommonModule],
})
export class InputOutputModule {}
