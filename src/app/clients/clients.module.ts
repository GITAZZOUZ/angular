import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientComponent } from './components/client/client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';


@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ],
  declarations: [ListClientsComponent, ClientComponent]
})
export class ClientsModule { }
