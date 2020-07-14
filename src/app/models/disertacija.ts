import { Nastavnik } from './nastavnik';
import { DatotekaZaDisertaciju } from './datoteka-za-disertaciju';
import { StudentNaGodini } from './student-na-godini';

export interface Disertacija { 
    id: number 
    naslov: String
    datumOdbrane: Date
    datumAplikacije: Date
    mentor: Nastavnik 
    datotekaZaDizertaciju: DatotekaZaDisertaciju
    studentNaGodini: StudentNaGodini
}
