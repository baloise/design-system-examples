import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  BalCoreModule,
  BalHeadingModule,
  BalButtonModule,
  BalFooterModule,
  BalNavbarModule,
  BalLogoModule,
  BalStageModule,
  BalCardModule,
  BalFieldModule,
  BalInputModule,
  BalToastModule,
  BalSelectModule,
} from '@baloise/design-system-components-angular';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { MethodComponent } from './method/method.component';
import {DumbComponentComponent} from "./dumb-component/dumb-component.component";

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    EventComponent,
    MethodComponent,
    DumbComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BalCoreModule.forRoot({
      defaults: {
        region: 'CH',
        language: 'en',
        allowedLanguages: ['de', 'fr', 'it', 'en'],
      },
    }),
    BalHeadingModule,
    BalButtonModule,
    BalFooterModule,
    BalNavbarModule,
    BalLogoModule,
    BalStageModule,
    BalCardModule,
    BalFieldModule,
    BalInputModule,
    BalToastModule,
    BalSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
