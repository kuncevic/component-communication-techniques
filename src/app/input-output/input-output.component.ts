import { Component, OnInit } from '@angular/core';

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

  childValueChange(event) {
    this.state.value1 = event;
    this.total = this.sum();
  }

  littleChildValueChange(event) {
    this.state.value2 = event;
    this.total = this.sum();
  }

  parentValueChange(event) {
    this.state.value3 = event;
    this.total = this.sum();
  }

  sum() {
    return this.state.value1 + this.state.value2 + this.state.value3;
  }
}
