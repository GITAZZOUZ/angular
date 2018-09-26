import { Component, OnInit } from '@angular/core';
import { Client } from '../../../shared/models/Client';

import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../../shared/interfaces/row';
import { ClientsService } from '../../../prestations/services/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-Clients.component.html',
  styleUrls: ['./list-Clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  public collection: Client[];
  public listHeaders: string[];
  public row: Row;

  public plusSquare = faPlusSquare;

  constructor(
      private ClientService: ClientsService
  ) { }

  ngOnInit() {
      // this.collection = this.ClientService.getCollection;
      this.collection = this.ClientService.collection;
      this.listHeaders = [
        'name',
        'email',
        'tel',
        'contact',
        'Action'
      ];
      this.row = {
        route: 'add',
        icon: faPlusSquare,
        libelle: 'Ajouter une Client'
      };
  }

}
