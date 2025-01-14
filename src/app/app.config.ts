import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ReactiveFormsModule } from '@angular/forms';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import Aura from '@primeng/themes/aura';
import Material from '@primeng/themes/material';
import Nora from '@primeng/themes/nora';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    importProvidersFrom(RouterModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(ReactiveFormsModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'manual',
          cssLayer: false,
          ripple: true,
        },
      },
    }),
    { provide: 'API_URL', useValue: 'http://localhost:3000/api' },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
};
