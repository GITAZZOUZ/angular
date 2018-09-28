import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../../shared/interfaces/row';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {

// async
//   public collection: Prestation[];
   public collection: Observable<Prestation[]>;
  public listHeaders: string[];
  public row: Row;

  public plusSquare = faPlusSquare;
    // public sub: Subscription;

  constructor(
      private prestationService: PrestationsService
  ) { }

  ngOnInit() {
// async
      this.collection = this.prestationService.collection$;



    // this.sub = this.prestationService.collection.subscribe((data) => {
    //     console.log(data);

    //     this.collection = data;
    //     // data.forEach(element => {
    //     //     this.collection.push(new Prestation(element));
    //     // });
    // });
      this.listHeaders = [
        'Type',
        'Client',
        'Nb Jours',
        'Tjm HT',
        'Total HT',
        'Total TTC',
        'Action',
        'Delete',
      ];
      this.row = {
        route: 'add',
        icon: faPlusSquare,
        libelle: 'Ajouter une prestation'
      };
  }

  ngOnDestroy() {
// this.sub.unsubscribe();
  }

}
