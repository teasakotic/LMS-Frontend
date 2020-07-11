import { Fakultet } from './fakultet';
import { GodinaStudija } from './godina-studija';

export interface StudijskiProgram {
  id: number;
  naziv: string;
  opis: string;
  fakultet: Fakultet;
  godinaStudija: GodinaStudija;
}
