import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../../shared/interfaces/row';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  public collection: Prestation[];
  public listHeaders: string[];
  public row: Row;

  public plusSquare = faPlusSquare;

  constructor(
      private prestationService: PrestationsService
  ) { }

  ngOnInit() {
      // this.collection = this.prestationService.getCollection;
      this.collection = this.prestationService.collection;
      this.listHeaders = [
        'Type',
        'Client',
        'Nb Jours',
        'Tjm HT',
        'Total HT',
        'Total TTC',
        'Action',
      ];
      this.row = {
        route: 'add',
        icon: faPlusSquare,
        libelle: 'Ajouter une prestation'
      };
  }

}
