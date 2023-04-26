import { Component, ViewChild } from '@angular/core';
import type { Components } from '@baloise/design-system-components';
import { ProxyComponent } from '@baloise/design-system-components-angular';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
})
export class MethodComponent {
  @ViewChild('mySelect') mySelect!: ProxyComponent<Components.BalSelect>;

  chooseTennis(): void {
    this.mySelect.el.select('tennis');
  }
}
