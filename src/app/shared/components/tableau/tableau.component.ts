import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../../interfaces/row';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  @Input() headers: string[];
  @Input() addRow: Row;
  constructor() { }

  ngOnInit() {
  }

}
