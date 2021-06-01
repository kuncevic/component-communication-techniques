import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-nested-child',
  templateUrl: './nested-child.component.html',
  styleUrls: ['./nested-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedChildComponent implements OnInit {
  value$: Observable<number>;
  constructor(private counterStore: CounterService) {}

  ngOnInit(): void {
    this.value$ = this.counterStore.state$.pipe(map((x) => x.value3));
  }

  updateValue(value: number): void {
    this.counterStore.setValue3(value);
  }
}
