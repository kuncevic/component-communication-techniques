import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InputOutputComponent } from './input-output.component';
import { NestedChildComponent } from './nested-child/nested-child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    InputOutputComponent,
    NestedChildComponent,
  ],
  imports: [CommonModule],
})
export class InputOutputModule {}
