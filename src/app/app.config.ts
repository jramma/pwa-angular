import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

// import { HttpClientModule } from '@angular/common/http';
// DEPRECATED!!!!!!!!!!!!!!!!!!!!! -- avoid httpclientmodule
export const appConfig: ApplicationConfig = {
  providers: [
    // importProvidersFrom(HttpClientModule),
    // deprecated
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ],
};
