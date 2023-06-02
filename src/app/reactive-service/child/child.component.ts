import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CounterService } from '../services/counter.service.rxjs';
import { AsyncPipe } from '@angular/common';
import { NestedChildComponent } from '../nested-child/nested-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NestedChildComponent, AsyncPipe],
})
export class ChildComponent implements OnInit {
  value$: Observable<number>;
  constructor(private counterStore: CounterService) {}

  ngOnInit(): void {
    this.value$ = this.counterStore.state$.pipe(map((x) => x.value2));
  }

  updateValue(value: number): void {
    this.counterStore.setValue2(value);
  }
}
