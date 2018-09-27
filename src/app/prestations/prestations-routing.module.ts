import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';

const appRoutes: Routes = [
    { path: '', component: ListPrestationsComponent },
    { path: 'add', component: AddPrestationComponent },
 ];
@NgModule({
    imports: [
        CommonModule,
            RouterModule.forChild(
                appRoutes
              )
      ],
  declarations: []
})
export class PrestationsRoutingModule { }
