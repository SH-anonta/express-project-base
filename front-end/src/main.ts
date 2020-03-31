import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {API_BASE_URL} from './constants/di-tokens';

if (environment.production) {
  enableProdMode();
}

const staticProviders = [
  {
    provide: API_BASE_URL,
    useValue: environment.apiBaseUrl
  }
];

platformBrowserDynamic(staticProviders).bootstrapModule(AppModule)
  .catch(err => console.error(err));
