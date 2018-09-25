import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ],
  declarations: [ListPrestationsComponent],
  exports: [
  // ListPrestationsComponent
]
})
export class PrestationsModule { }
