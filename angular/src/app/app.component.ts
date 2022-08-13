import {Component} from '@angular/core';
import {EmailValidator, UntypedFormControl, UntypedFormGroup, RequiredValidator} from "@angular/forms";
import {BalConfigState, BalSwissLanguage, onBalConfigChange} from '@baloise/design-system-next-components'
import {BalValidators} from "@baloise/web-app-validators-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome';
  language: BalSwissLanguage = 'en';
  form = new UntypedFormGroup({
    name: new UntypedFormControl('Example name'),
    email: new UntypedFormControl(null, [BalValidators.isRequired(), BalValidators.isMinLength(4), BalValidators.isEmail()]),
    status: new UntypedFormControl('Hans Muster')
  });

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
