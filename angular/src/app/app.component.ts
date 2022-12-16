import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

type option = { label: string, value: string | undefined };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  options$$: Subject<option[]> = new Subject();

  formGroup: FormGroup = this.fb.group({
    example1: ['', [Validators.required, Validators.pattern('.*')]],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // simulate a async call
    setTimeout(() => {
      this.options$$.next([
        {label: 'undefined', value: undefined},
        {label: 'ddLabel1', value: 'ddValue1'},
        {label: 'ddLabel2', value: 'ddValue2'},
        {label: 'ddLabel3', value: 'ddValue3'},
        {label: 'ddLabel4', value: 'ddValue4'},
      ]);
    }, 1000)
  }

  isInvalid(controlName: string): Observable<boolean> {
    const control = this.formGroup?.controls[controlName];

    // console.log(`value: ${control?.value}, touched: ${control?.touched}, dirty: ${control?.dirty}, valid: ${control?.valid}, pristine: ${control?.pristine}, pending: ${control?.pending}`)
    // console.log('🔍' + controlName + '🔍', Boolean(control.invalid && control?.touched))
    return of(Boolean(control.invalid && control?.touched)).pipe(debounceTime(100));
  }

}
