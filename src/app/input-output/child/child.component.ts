import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() value = 0;
  @Input() littleChildValue;

  @Output() valueChange = new EventEmitter<number>();
  @Output() littleChildValueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  updateValue(value: number): void {
    this.value = this.value + value;
    this.valueChange.emit(this.value);
  }

  bubbleLittleChild(event) {
    this.littleChildValueChange.emit(event);
  }
}
