import { provideServerRendering } from '@angular/platform-server';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const config: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(),
    provideRouter(routes),
    // Outros provedores específicos do lado do servidor
  ],
};
