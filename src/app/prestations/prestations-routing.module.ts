import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';

const appRoutes: Routes = [
    { path: '', component: ListPrestationsComponent },
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
