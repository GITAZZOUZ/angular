import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ],
  declarations: [ListPrestationsComponent, PrestationComponent],
  exports: [
  // ListPrestationsComponent
]
})
export class PrestationsModule { }
