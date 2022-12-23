import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {BalConfigState, BalSwissLanguage, onBalConfigChange} from '@baloise/design-system-components'
import {BalValidators} from "@baloise/web-app-validators-angular";

const OPTIONS = [
  {
    label: 'Switzerland',
    value: 'ch',
  },
  {
    label: 'Serbia',
    value: 'rs',
  },
  {
    label: 'England',
    value: 'en',
  },
  {
    label: 'Neverland',
    value: 'nv'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome';
  language: BalSwissLanguage = 'en';
  control = new FormControl('', BalValidators.isRequired());

  options = OPTIONS;
  isFilterEmpty = true;

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

  onInput(event: CustomEvent<string>): void {
    this.isFilterEmpty = !event.detail;
  }

  returnValue(entry: any): string {
    return entry.value;
  }
}
