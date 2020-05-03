import { RealizacijaPredmeta } from './realizacija-predmeta';
import { TipNastave } from './tip-nastave';
import { Ishod } from './ishod';

export interface TerminNastave {
    id: number
    realizacijaPredmeta: RealizacijaPredmeta
    tipNastave: TipNastave
    ishod: Ishod
}
