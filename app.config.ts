import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PRIME_NG_CONFIG } from 'primeng/config';

export const appConfig = {
    imports: [
        BrowserAnimationsModule
    ],
    providers: [
        {
            provide: PRIME_NG_CONFIG,
            useValue: {
                theme: 'aura'
            }
        }
    ]
};