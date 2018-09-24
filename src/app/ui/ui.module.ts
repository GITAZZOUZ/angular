import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UiComponent, NavComponent, FooterComponent, HeaderComponent],
  // permettre l'acces au comosent par les autres modules
  exports: [
      UiComponent
  ]
})
export class UiModule { }
