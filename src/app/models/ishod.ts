import { EvaluacijaZnanja } from './evaluacija-znanja';
import { Predmet } from './predmet';
import { RealizacijaPredmeta } from './realizacija-predmeta';

export interface Ishod {
  id: number;
  opis: String;
  nedelja: String;
  predmet: Predmet;
  realizacijaPredmeta: RealizacijaPredmeta;
}
