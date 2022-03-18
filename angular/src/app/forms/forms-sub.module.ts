import {NgModule} from '@angular/core';
import {FormComponent} from "./forms-component/form-component.component";
import {SharedModule} from "../shared/shared.module";
import {BalFileUploadModule} from "@baloise/design-system-components-angular";


@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [
    SharedModule,
    BalFileUploadModule
  ]
})
export class FormsSubModule {
}
