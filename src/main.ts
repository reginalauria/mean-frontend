import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { InicioComponent } from './app/components/inicio/inicio.component';

bootstrapApplication(InicioComponent, {
  providers: [provideHttpClient()] // ✅ más moderno y compatible
}).catch(err => console.error(err));

