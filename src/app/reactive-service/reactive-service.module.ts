import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { NestedChildComponent } from './nested-child/nested-child.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveServiceComponent } from './reactive-service.component';



@NgModule({
  declarations: [ParentComponent, ChildComponent, ReactiveServiceComponent, NestedChildComponent],
  imports: [
    CommonModule
  ]
})
export class ReactiveServiceModule { }
