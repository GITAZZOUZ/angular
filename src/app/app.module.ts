import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    LoginModule,
    PageNotFoundModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
