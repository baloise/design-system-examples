import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BalFieldModule, BalInputModule, BalSelectModule} from "@baloise/design-system-components-angular";
import {ReactiveFormsModule} from "@angular/forms";

const commonModules = [
  CommonModule,
  BalFieldModule,
  BalInputModule,
  BalSelectModule,
  ReactiveFormsModule]

@NgModule({
  declarations: [],
  imports: [
    ...commonModules
  ],
  exports: [...commonModules]
})
export class SharedModule {
}
