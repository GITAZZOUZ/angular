import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
      private prestationService: PrestationsService,
      private router: Router
  ) { }

  ngOnInit() {
  }
  public add(item: Prestation): void {
this.prestationService.add(item);
// // lancer la requete de http
// this.prestationService.add(item).subscribe((data) => {
//     // exploite res du serveur
// });
this.router.navigate(['prestations']);
  }
}
