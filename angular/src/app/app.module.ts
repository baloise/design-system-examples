import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaloiseDesignSystemModule } from '@baloise/design-system-components-angular';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { ModalComponent } from './modal/modal.component';
import { MethodComponent } from './method/method.component';
import { FormsSubModule } from './forms/forms-sub.module';
import { SharedModule } from './shared/shared.module';
import * as balIcons from '@baloise/design-system-icons';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    EventComponent,
    MethodComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BaloiseDesignSystemModule.forRoot({
      defaults: {
        region: 'CH',
        language: 'en',
        allowedLanguages: ['de', 'fr', 'it', 'en'],
        icons: { ...balIcons }, // or all the icons at once
      },
    }),
    SharedModule,
    FormsSubModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
