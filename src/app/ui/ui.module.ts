import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 // import { PrestationsModule } from '../prestations/prestations.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [UiComponent, NavComponent, FooterComponent, HeaderComponent],
  // permettre l'acces au comosent par les autres modules
  exports: [
      UiComponent
  ]
})
export class UiModule { }
