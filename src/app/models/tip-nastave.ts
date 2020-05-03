import { TerminNastave } from './termin-nastave';
import { NastavnikNaRealizaciji } from './nastavnik-na-realizaciji';

export interface TipNastave {
    id:number
    nazvi: String
    terminNastave: TerminNastave
    nastavnikNaRealizaciji: NastavnikNaRealizaciji
}
