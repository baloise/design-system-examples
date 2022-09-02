import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BalCoreModule, BalTextModule} from '@baloise/design-system-next-components-angular';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { MethodComponent } from './method/method.component';
import { FormsSubModule } from './forms/forms-sub.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    EventComponent,
    MethodComponent,
  ],
  imports: [
    BrowserModule,
    BalCoreModule.forRoot({
      defaults: {
        region: 'CH',
        language: 'en',
        allowedLanguages: ['de', 'fr', 'it', 'en'],
      },
    }),
    SharedModule,
    FormsSubModule,
    BalTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
