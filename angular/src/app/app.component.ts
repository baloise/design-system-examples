import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BalLayoutBundle, BalHeading, BalButton } from '@baloise/design-system-components-angular/standalone'

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, BalLayoutBundle, BalHeading, BalButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
