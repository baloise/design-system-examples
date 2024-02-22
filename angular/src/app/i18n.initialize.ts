import {
  BalConfigState,
  BalLanguage,
  onBalConfigChange,
} from '@baloise/design-system-components';
import { BalConfigService } from '@baloise/design-system-components-angular/standalone';
import { TranslocoService } from '@ngneat/transloco';

export function initializeI18n(
  transloco: TranslocoService,
  balConfig: BalConfigService
) {
  return (): Promise<void> => {
    const activeLanguage = transloco.getActiveLang() as BalLanguage;
    const allowedLanguages = transloco.getAvailableLangs() as BalLanguage[];

    balConfig.setLanguage(activeLanguage);
    balConfig.setAllowedLanguages(allowedLanguages);

    onBalConfigChange((config: BalConfigState) => {
      if (transloco.getActiveLang() !== config.language) {
        transloco.setActiveLang(config.language);
      }
    });

    transloco.langChanges$.subscribe((value) => {
      balConfig.setLanguage(value as BalLanguage);
    });

    return Promise.resolve();
  };
}
