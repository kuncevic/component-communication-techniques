import { Component, OnInit } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

interface Counter {
  value1: number;
  value2: number;
  value3: number;
}

const initialState: Counter = { value1: 0, value2: 0, value3: 0 };

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss'],
    standalone: true,
    imports: [ParentComponent],
})
export class InputOutputComponent implements OnInit {
  state: Counter = { ...initialState };
  total: number;

  constructor() {}

  ngOnInit(): void {
    this.total = this.sum();
  }

  reset(): void {
    this.state = { ...initialState };
    this.total = this.sum();
  }

  parentValueChange(event) {
    this.total = this.sum();
  }

  childValueChange(event) {
    this.total = this.sum();
  }

  nestedChildValueChange(event) {
    this.total = this.sum();
  }

  sum() {
    return this.state.value1 + this.state.value2 + this.state.value3;
  }
}
