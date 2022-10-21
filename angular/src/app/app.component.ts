import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BalConfigState, BalSwissLanguage, onBalConfigChange } from '@baloise/design-system-components'

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
  form = new FormGroup({});


  formGroup: FormGroup = this.fb.group({
    twoOptions: 'ddValue2',
    threeOptions: 'ddValue1',
    fourOptions: 'ddValue3',
    noLabelOption: null,
  });

  options: SelectionOption<string>[] = [
    {label: 'ddLabel1', value: 'ddValue1'},
    {label: 'ddLabel2', value: 'ddValue2'},
    {label: 'ddLabel3', value: 'ddValue3'},
  ];

  constructor(private fb: FormBuilder) {
    onBalConfigChange((config: BalConfigState) => {
      this.language = config.language as BalSwissLanguage;
    });

  }
}
