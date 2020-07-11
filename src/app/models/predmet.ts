import { GodinaStudija } from './godina-studija';
import { Ishod } from './ishod';
import { Preduslov } from './preduslov';

export interface Predmet {
  id: number;
  naziv: string;
  espb: number;
  obavezan: boolean;
  brojPredavanja: number;
  brojVezbi: number;
  drugiObliciNastave: number;
  istrazivackiRad: number;
  ostaliCasovi: number;
  silabus: Ishod[];
  godinaStudija: GodinaStudija;
  obrisan: boolean;
}
