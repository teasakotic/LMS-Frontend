import { Nastavnik } from './nastavnik';
import { TipNastave } from './tip-nastave';

export interface NastavnikNaRealizaciji {
    id: number,
    nastavnik: Nastavnik
    tipNastave: TipNastave
}
