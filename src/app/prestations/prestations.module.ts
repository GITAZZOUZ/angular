import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './components/edit-prestation/edit-prestation.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [ListPrestationsComponent, PrestationComponent, AddPrestationComponent, EditPrestationComponent, FormComponent, FormReactiveComponent],
  exports: [
  // ListPrestationsComponent
]
})
export class PrestationsModule { }
