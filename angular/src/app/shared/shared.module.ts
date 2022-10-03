import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  BalButtonModule,
  BalCardModule,
  BalCheckboxModule,
  BalFieldModule,
  BalFooterModule,
  BalHeadingModule,
  BalInputModule,
  BalLogoModule,
  BalNavbarModule,
  BalRadioModule,
  BalSelectModule,
  BalStageModule,
  BalToastModule,
} from '@baloise/design-system-next-components-angular';

const commonModules = [
  /**
   * Angular Modules
   */
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  /**
   * Design System Modules
   */
  BalFieldModule,
  BalInputModule,
  BalSelectModule,
  BalHeadingModule,
  BalButtonModule,
  BalFooterModule,
  BalNavbarModule,
  BalLogoModule,
  BalStageModule,
  BalCardModule,
  BalToastModule,
  BalCheckboxModule,
  BalRadioModule
];

@NgModule({
  declarations: [],
  imports: [...commonModules],
  exports: [...commonModules],
})
export class SharedModule {
}
