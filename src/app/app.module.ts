import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { StorefrontMissingExportsModule } from './storefront-missing-exports/storefront-missing-exports.module';
import { MagrabiAllConfigsModule } from './config/magrabi-all-config.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
       //   baseUrl: 'https://api.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com',
        //  prefix: '/rest/v2/'
           baseUrl: 'https://localhost:9002',
           prefix: '/occ/v2/'
        }
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['electronics-spa', 'apparel-uk-spa'],
        currency: ['USD', 'GBP']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.0'
      }
    }),
    StorefrontMissingExportsModule,
    MagrabiAllConfigsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
