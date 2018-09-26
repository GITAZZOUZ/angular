
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';

const appRoutes: Routes = [
    { path: '', component: ListClientsComponent },
    // { path: 'add', component: ListPrestationsComponent },
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
export class ClientsRoutingModule { }
