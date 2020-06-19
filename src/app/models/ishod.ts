import { EvaluacijaZnanja } from './evaluacija-znanja';
import { Predmet } from './predmet';
import { TerminNastave } from './termin-nastave';
import { ObrazovniCilj } from './obrazovni-cilj';
import { NastavniMaterijal } from './nastavni-materijal';

export interface Ishod {
  id: number;
  opis: String;
  nedelja: String;
  // TODO: Delete comments for final version
  // evaluacijaZnanja: EvaluacijaZnanja
  // predmet: Predmet
  // terminNastave: TerminNastave
  // obrazovniCilj: ObrazovniCilj
  // nastavniMaterijal: NastavniMaterijal
}
