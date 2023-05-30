import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-nested-child',
    templateUrl: './nested-child.component.html',
    styleUrls: ['./nested-child.component.scss'],
    standalone: true,
})
export class NestedChildComponent implements OnInit {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  updateValue(value: number): void {
    this.value = this.value + value;
    this.valueChange.emit(this.value);
  }
}
