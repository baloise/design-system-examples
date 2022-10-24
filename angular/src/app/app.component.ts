import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BalConfigState, BalSwissLanguage, onBalConfigChange } from '@baloise/design-system-components'
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


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
  language: BalSwissLanguage = 'en';

  formGroup: FormGroup = this.fb.group({
    street: 'basler strasse',
  });

  options: Observable<SelectionOption<string>[]> = of([
    {label: 'Basler Strasse', value: 'basler strasse'},
    {label: 'Züricher Strasse', value: 'züricher strasse'},
  ]).pipe(
    delay(2000)
  )

  constructor(private fb: FormBuilder) {
    onBalConfigChange((config: BalConfigState) => {
      this.language = config.language as BalSwissLanguage;
    });
  }

  onSelectedItem($event: CustomEvent<string | string[] | undefined>) {
    console.log('onSelect', $event);
  }

  onInput($event: CustomEvent<string>) {
    console.log('onInput', $event)
  }

}
