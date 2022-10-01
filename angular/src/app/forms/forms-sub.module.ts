import {NgModule} from '@angular/core';
import {FormComponent} from "./forms-component/form-component.component";
import {SharedModule} from "../shared/shared.module";
import {BalRadioModule} from "@baloise/design-system-next-components-angular";


@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
    imports: [
        SharedModule,
        BalRadioModule
    ]
})
export class FormsSubModule {
}
