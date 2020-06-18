import { Fakultet } from './fakultet';
import { Nastavnik } from './nastavnik';
import { GodinaStudija } from './godina-studija';

export interface StudijskiProgram {
  id: number;
  naziv: string;
  opis: string;
  fakultet: Fakultet;
  godinaStudija: GodinaStudija;  // FIXME: Console error -> Cannot read property predmeti of null
}
