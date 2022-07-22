import { Component } from '@angular/core';
import { Props } from '@baloise/design-system-next-components';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
})
export class PropertyComponent {
  myColor: Props.BalButtonColor = 'info';
}
