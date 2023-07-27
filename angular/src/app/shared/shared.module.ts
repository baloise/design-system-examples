import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  BaloiseDesignSystemModule
} from '@baloise/design-system-components-angular';

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
  BaloiseDesignSystemModule
];

@NgModule({
  declarations: [],
  imports: [...commonModules],
  exports: [...commonModules],
})
export class SharedModule {
}
