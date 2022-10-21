import { Component } from '@angular/core';
import { Props } from '@baloise/design-system-components';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
})
export class PropertyComponent {
  myColor: Props.BalButtonColor = 'info';
}
