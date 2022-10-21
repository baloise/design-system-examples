import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BalConfigState, BalSwissLanguage, onBalConfigChange } from '@baloise/design-system-components'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome';
  language: BalSwissLanguage = 'en';
  form = new FormGroup({});

  constructor() {
    onBalConfigChange((config: BalConfigState) => {
      this.language = config.language as BalSwissLanguage;
    });

  }
}
