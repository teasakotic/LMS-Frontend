import { Predmet } from './predmet';
import { NastavnikNaRealizaciji } from './nastavnik-na-realizaciji';

export interface RealizacijaPredmeta {
    id: number
    predmet: Predmet
    nastavnikNaRealizaciji: NastavnikNaRealizaciji
}
