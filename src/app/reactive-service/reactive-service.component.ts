import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from './services/basic-example/counter.service';
import { AsyncPipe } from '@angular/common';
import { ParentComponent } from './parent/parent.component';

@Component({
    selector: 'app-reactive-service',
    templateUrl: './reactive-service.component.html',
    styleUrls: ['./reactive-service.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ParentComponent, AsyncPipe],
})
export class ReactiveServiceComponent implements OnInit {
  total$: Observable<number>;
  constructor(private counterStore: CounterService) {}

  ngOnInit(): void {
    this.total$ = this.counterStore.sum();
  }

  reset(): void {
    this.counterStore.resetState();
  }
}
