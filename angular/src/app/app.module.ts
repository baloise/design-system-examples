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
  BalNoticesModule,
} from '@baloise/design-system-components-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
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
    BalNoticesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
