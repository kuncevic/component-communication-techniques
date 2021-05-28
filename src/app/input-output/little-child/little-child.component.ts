import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-little-child',
  templateUrl: './little-child.component.html',
  styleUrls: ['./little-child.component.scss'],
})
export class LittleChildComponent implements OnInit {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  updateValue(value: number): void {
    this.value = this.value + value;
    this.valueChange.emit(this.value);
  }
}
