import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @Input() value;
  @Input() littleChildValue;
  @Input() childValue;

  @Output() valueChange = new EventEmitter<number>();
  @Output() littleChildValueChange = new EventEmitter<number>();
  @Output() childValueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void { }

  updateValue(value: number): void {
    this.value = this.value + value;
    this.valueChange.emit(this.value);
  }

  bubbleLittleChild(event) {
    this.littleChildValueChange.emit(event);
  }

  bubbleChild(event) {
    this.childValueChange.emit(event);
  }
}
