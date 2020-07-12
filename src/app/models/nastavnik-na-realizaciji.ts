import { Nastavnik } from './nastavnik';
import { TipNastave } from './tip-nastave';
import { RealizacijaPredmeta } from './realizacija-predmeta';

export interface NastavnikNaRealizaciji {
    id: number,
    nastavnik: Nastavnik
    tipNastave: TipNastave
    realizacijaPredmeta: RealizacijaPredmeta
}
