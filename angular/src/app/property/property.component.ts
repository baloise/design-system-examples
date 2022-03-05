import { Component } from '@angular/core';
import { BalButtonColor } from '@baloise/design-system-components';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
})
export class PropertyComponent {
  myColor: BalButtonColor = 'info';
}
