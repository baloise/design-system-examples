import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker/locale/de';
import { debounceTime, delay, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

export interface SelectionOption<T> {
  value: T;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome';

  streetsArray: string[];
  streetInputChanged$$ = new BehaviorSubject<string>('');
  streets$: Observable<SelectionOption<string>[]>;

  formGroup: FormGroup = this.fb.group({
    street1: 'Am Eselsdamm',
  });

  constructor(private fb: FormBuilder) {
    faker.seed(123);
    this.streetsArray = Array.from({length: 400}).map(() => faker.address.street());

    this.streets$ = this.streetInputChanged$$.asObservable()
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        mergeMap((item) => {
          return this.mockData(item);
        })
      )
  }

  mockData(name: string): Observable<SelectionOption<string>[]> {
    return of(this.streetsArray).pipe(delay(200),
      map(item => item.filter((element: string) => element.toLowerCase().includes(name.toLowerCase())).map((street: string) => ({
        value: street,
        label: street
      }))),
    )
  }

  onBalInput($event: any) {
    const str = String($event.detail);
    this.streetInputChanged$$.next(str);
  }
}
