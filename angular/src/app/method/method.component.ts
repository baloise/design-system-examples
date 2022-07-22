import { Component, ViewChild } from '@angular/core';
import type { Components } from '@baloise/design-system-next-components';
// import { ProxyComponent } from '@baloise/design-system-next-components-angular';
export interface ProxyComponent<T> {
  el: T;
}

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
