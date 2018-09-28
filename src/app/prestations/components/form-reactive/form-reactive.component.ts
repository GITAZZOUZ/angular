import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
    public states = Object.values(State);
    public form: FormGroup;
    // private prestation: Prestation =  new Prestation();
    @Input()  prestation: Prestation;
    @Output() nPresta: EventEmitter<Prestation> = new EventEmitter();
  constructor(
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    console.log('88888888888888888888');
    //   console.log(this.prestation.client);
      if (!this.prestation ) {
this.prestation = new Prestation();
      }
      this.createForm();
  }
private createForm(): void {
this.form = this.fb.group({
type_presta: [
    this.prestation.type_presta,
    Validators.required
],
client: [
    this.prestation.client,
    Validators.compose([Validators.required, Validators.minLength(2)])
],
nb_jours: [
    this.prestation.nb_jours
],
tjm_ht: [
    this.prestation.tjm_ht
],
taux_tva: [
    this.prestation.taux_tva
],
state: [
    this.prestation.state
],
id: [
    this.prestation.id
]

});
}
  public process(): void {
      this.nPresta.emit(new Prestation( this.form.value));

  }

  isError(fcName: string): boolean {
    // console.log(fcName);
    return this.form.get(fcName).invalid && this.form.get(fcName).touched;
  }
}
