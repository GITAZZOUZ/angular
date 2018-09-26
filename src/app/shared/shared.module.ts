import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnTabComponent } from './components/btn-tab/btn-tab.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [TotalPipe, TableauComponent, BtnTabComponent],
  exports: [TotalPipe, TableauComponent, BtnTabComponent]
})
export class SharedModule { }
