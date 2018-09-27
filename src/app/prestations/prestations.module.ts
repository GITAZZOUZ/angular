import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './components/edit-prestation/edit-prestation.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [ListPrestationsComponent, PrestationComponent, AddPrestationComponent, EditPrestationComponent, FormComponent],
  exports: [
  // ListPrestationsComponent
]
})
export class PrestationsModule { }
