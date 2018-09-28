import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from '../../../shared/models/prestation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
public prestation: Prestation;
  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.route.data.subscribe(data => {
          console.log(data.prestation.value);
          this.prestation = new Prestation(data.prestation.value);

      });
  }

  public edit(item: Prestation): void {
    this.prestation = item;
    this.prestationService.update(item);
    console.log('9333333333333333333333333');


    console.log(this.prestation);

    // // lancer la requete de http
    // this.prestationService.add(item).subscribe((data) => {
    //     // exploite res du serveur
    // });
    // this.router.navigate(['prestations']);
      }


}
