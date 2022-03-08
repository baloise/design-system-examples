import {NgModule} from '@angular/core';
import {FormComponent} from "./forms-component/form-component.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [
    SharedModule
  ]
})
export class FormsSubModule {
}
