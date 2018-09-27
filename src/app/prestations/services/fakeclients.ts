import { State } from '../../shared/enums/state.enum';
import { Client } from '../../shared/models/Client';

export const fakeClients: Client[] = [
new Client( {
    id: 'id_1',
    name: 'name_1',
    email: 'email_1',
    tel: 'tel_1',
    contact: 'contact_1',
    state: State.ANNULE
})
,
new Client( {
    id: 'id_2',
    name: 'name_2',
    email: 'email_2',
    tel: 'tel_2',
    contact: 'contact_2',
    state: State.CONFIRME
})
];
