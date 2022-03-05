import { Component } from '@angular/core';
import { BalSwissLanguage } from '@baloise/design-system-components';
import {
  onBalConfigChange,
  BalConfigState,
} from '@baloise/design-system-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome';
  language: BalSwissLanguage = 'en';

  constructor() {
    onBalConfigChange((config: BalConfigState) => {
      this.language = config.language as BalSwissLanguage;

      switch (this.language) {
        case 'de':
          this.title = 'Willkommen';
          break;
        case 'it':
          this.title = 'Benvenuta';
          break;
        case 'fr':
          this.title = 'Bienvenue';
          break;
        default:
          this.title = 'Welcome';
          break;
      }
    });
  }
}
