import { Predmet } from './predmet';

export interface GodinaStudija {
    id: number,
    godina: number,
    datumPocetka: Date,
    datumKraja: Date,
    predmeti: Predmet[]; // TODO: Delete this
}
