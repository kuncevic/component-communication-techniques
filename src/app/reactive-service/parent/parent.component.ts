import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CounterService } from '../services/counter.service.elf';
import { AsyncPipe } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: true,
  imports: [ChildComponent, AsyncPipe],
})
export class ParentComponent implements OnInit {
  value$: Observable<number>;
  constructor(private counterStore: CounterService) {}

  ngOnInit(): void {
    this.value$ = this.counterStore.state$.pipe(map((x) => x.value1));
  }

  updateValue(value: number): void {
    this.counterStore.setValue1(value);
  }
}
