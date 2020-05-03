import { Polaganje } from './polaganje';
import { Ishod } from './ishod';
import { InstrumentEvaluacije } from './instrument-evaluacije';
import { TipEvaulacije } from './tip-evaulacije';
import { RealizacijaPredmeta } from './realizacija-predmeta';

export interface EvaluacijaZnanja {
    id: number
    vremePocetka: Date
    vremeZavrsetka: Date
    bodovi: number
    trajanjeUMinutima: number
    polaganje: Polaganje
    ishod: Ishod
    instrumentEvaluacije: InstrumentEvaluacije
    tipEvaluacije: TipEvaulacije
    realizacijaPredmeta: RealizacijaPredmeta
}
