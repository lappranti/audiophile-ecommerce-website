import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private localStorageKey = 'userLanguage';

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  initLanguage(): void {
    const currentLang = this.getUserLanguage();
    this.translate.setDefaultLang(currentLang);
    this.translate.use(currentLang);
  }

  setUserLanguage(language: string): void {
    localStorage.setItem(this.localStorageKey, language);
    this.translate.use(language);
  }

  getUserLanguage(): string {
    return localStorage.getItem(this.localStorageKey) || 'en';
  }
}
