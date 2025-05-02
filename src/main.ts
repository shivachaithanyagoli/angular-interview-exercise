import { bootstrapApplication }            from '@angular/platform-browser';
import { importProvidersFrom }             from '@angular/core';
import { provideHttpClient, 
         withInterceptorsFromDi }          from '@angular/common/http';
import { FormsModule }                    from '@angular/forms';

import { AppComponent }                   from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule),          // makes [(ngModel)] work
    provideHttpClient(withInterceptorsFromDi()) // registers HttpClient
  ]
}).catch(err => console.error(err));
