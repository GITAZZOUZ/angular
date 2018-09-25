import { State } from '../../shared/enums/state.enum';
import { PrestationI } from '../../shared/interfaces/prestation-i';
import { Prestation } from '../../shared/models/prestation';

export const fakePrestations: Prestation[] = [
new Prestation( {
    id: 'a1',
    type_presta: 'Formation',
    client: 'Modis',
    nb_jours: 2,
    tjm_ht: 500
})
,
new Prestation( {
    id: 'b1',
    type_presta: 'Formation',
    client: 'Edugroupe',
    nb_jours: 3,
    tjm_ht: 550
})
];
