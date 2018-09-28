import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Row } from '../../interfaces/row';
import { PrestationsService } from '../../../prestations/services/prestations.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None
  })
export class TableauComponent implements OnInit {
  @Input() headers: string[];
  @Input() addRow: Row;
  public msg$: Subject<any>;

  constructor(
      private prestationService: PrestationsService
  ) { }

  ngOnInit() {
      this.msg$ = this.prestationService.msg$;
  }

}
