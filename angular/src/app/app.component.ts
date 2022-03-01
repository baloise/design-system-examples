import { Component } from '@angular/core';
import { BalToastService } from '@baloise/design-system-components-angular';
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
  firstname?: string;
  lastname?: string;
  language: BalSwissLanguage = 'en';

  constructor(private toast: BalToastService) {
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

  firstnameChanged(value?: string) {
    this.firstname = value;
  }

  lastnameChanged(value?: string) {
    this.lastname = value;
  }

  cancel() {
    this.firstname = undefined;
    this.lastname = undefined;
  }

  submit() {
    if(this.firstname && this.lastname) {
      this.toast.create({
        message: `Form was submitted to ${this.firstname} ${this.lastname}`,
        color: 'success',
      });
    }else {
      this.toast.create({
        message: `Could not find any first or lastname!`,
        color: 'danger',
      });
    }

  }
}
