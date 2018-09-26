import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../../interfaces/row';

@Component({
  selector: 'app-btn-tab',
  templateUrl: './btn-tab.component.html',
  styleUrls: ['./btn-tab.component.scss']
})
export class BtnTabComponent implements OnInit {
    @Input() addRow: Row;
  constructor() { }

  ngOnInit() {
  }

}
