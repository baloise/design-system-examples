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
  firstname?: string;
  lastname?: string;
  language: BalSwissLanguage = 'en';

  constructor(private toast: BalToastService) {
    onBalConfigChange((config: BalConfigState) => {
      this.language = config.language as BalSwissLanguage;
    });
  }

  getWelcomeTitle() {
    switch (this.language) {
      case 'en':
        return 'Welcome';
      case 'de':
        return 'Willkommen';
      case 'it':
        return 'Benvenuta';
      default:
        return 'Bienvenue';
    }
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
    this.toast.create({
      message: `Form was submitted to ${this.firstname} ${this.lastname}`,
      color: 'success',
    });
  }
}
