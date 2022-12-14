import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BalButtonModule,
  BalCardModule,
  BalCheckboxModule,
  BalCoreModule,
  BalDatepickerModule,
  BalFieldModule,
  BalFooterModule,
  BalHeadingModule,
  BalInputModule,
  BalLogoModule,
  BalNavbarModule,
  BalRadioModule,
  BalSelectModule,
  BalStageModule,
  BalTextModule,
  BalToastModule,
} from '@baloise/design-system-components-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BalCoreModule.forRoot({
      defaults: {
        region: 'CH',
        language: 'en',
        allowedLanguages: ['de', 'fr', 'it', 'en'],
      },
    }),
    /**
     * Design System Modules
     */
    BalLogoModule,
    BalNavbarModule,
    BalFooterModule,
    BalStageModule,
    BalCardModule,
    BalHeadingModule,
    BalTextModule,
    BalInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
