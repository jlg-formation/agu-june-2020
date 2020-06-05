import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { StockModule } from './stock/stock.module';
import { WidgetModule } from './widget/widget.module';
import { ArticleService } from './services/article.service';
import { HttpArticleService } from './services/http-article.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    StockModule,
    WidgetModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: ArticleService, useClass: HttpArticleService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
