import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {BalConfigState, BalSwissLanguage, onBalConfigChange} from '@baloise/design-system-components'
import {BalValidators} from "@baloise/web-app-validators-angular";

interface NavigationItem {
  hidden: boolean;
  value: number;
  label: string;
  disabled: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Welcome';
  language: BalSwissLanguage = 'en';
  form = new UntypedFormGroup({
    name: new UntypedFormControl('Example name'),
    radioButton: new UntypedFormControl('yes'),
    email: new UntypedFormControl(null, [BalValidators.isRequired(), BalValidators.isMinLength(4), BalValidators.isEmail()]),
    status: new UntypedFormControl('Hans Muster'),
    correct: new UntypedFormControl(true),
    birthdate: new UntypedFormControl()
  });

  navigationItems: NavigationItem[] = [
    {hidden: false, label: 'first', 'value': 1, disabled: false},
    {hidden: false, label: 'second', 'value': 2, disabled: false},
    {hidden: false, label: 'third', 'value': 3, disabled: false},
    {hidden: false, label: 'forth', 'value': 4, disabled: false}]

  navigationModel = 3;

  value = 2

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

  ngOnInit(): void {
    setTimeout(() => {
      console.log("delete second item in navigationItems: ", this.navigationItems)
      this.navigationItems.splice(1, 1);
      setTimeout(() => {
        console.log("add second item in navigationItems:", this.navigationItems)
        this.navigationItems.splice(1, 0, {hidden: false, label: 'second', 'value': 2, disabled: false})
      }, 5000);
    }, 5000);

  }
}
