import { EvaluacijaZnanja } from './evaluacija-znanja';
import { ObjavaFajl } from './objava-fajl';

export interface InstrumentEvaluacije {
    id: number
    evaluacijaZnanja: EvaluacijaZnanja
    objavaFajl: ObjavaFajl
}
