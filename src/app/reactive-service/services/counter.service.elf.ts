import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  select,
  setProp,
  createStore,
  withProps,
  getRegistry,
} from '@ngneat/elf';

interface Counter {
  value1: number;
  value2: number;
  value3: number;
}

const initialState: Counter = { value1: 0, value2: 0, value3: 0 };

const store = createStore(
  { name: 'counter' },
  withProps<Counter>(initialState)
);

@Injectable({ providedIn: 'root' })
export class CounterService {
  state$ = store.asObservable();

  public setValue1(value1: number): void {
    store.update(setProp('value1', (value) => value + value1));
  }

  public setValue2(value2: number): void {
    store.update(setProp('value2', (value) => value + value2));
  }

  public setValue3(value3: number): void {
    store.update(setProp('value3', (value) => value + value3));
  }

  public sum(): Observable<number> {
    return store.pipe(
      select((state) => state.value1 + state.value2 + state.value3)
    );
  }

  public resetState(): void {
    getRegistry().forEach((store) => store.reset());
  }

  public getState(): Counter {
    return store.getValue();
  }
}
