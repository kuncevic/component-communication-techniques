import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() value = 0;
  @Input() nestedChildValue;

  @Output() valueChange = new EventEmitter<number>();
  @Output() nestedChildValueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  updateValue(value: number): void {
    this.value = this.value + value;
    this.valueChange.emit(this.value);
  }

  bubbleNestedChild(event) {
    this.nestedChildValueChange.emit(event);
  }
}
