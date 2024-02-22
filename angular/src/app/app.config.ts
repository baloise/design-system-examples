import { ApplicationConfig, APP_INITIALIZER, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideBaloiseDesignSystem, BalConfigService } from '@baloise/design-system-components-angular/standalone';
import { initializeI18n } from './i18n.initialize';
import { TranslocoService, provideTransloco } from '@ngneat/transloco';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideBaloiseDesignSystem({
      defaults: {
        region: 'CH',
      }
    }), 
    provideBaloiseDesignSystem({
      defaults: {
        region: 'CH',
      }
    }), 
    {
      provide: APP_INITIALIZER,
      useFactory: initializeI18n,
      multi: true,
      deps: [TranslocoService, BalConfigService],
    }, provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: ['N'],
          defaultLang: 'N',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      })]
};
