import { Predmet } from './predmet';
import { NastavnikNaRealizaciji } from './nastavnik-na-realizaciji';
import { Obavjestenje } from './obavjestenje';
import { GodinaStudija } from './godina-studija';

export interface RealizacijaPredmeta {
  id: number;
  predmet: Predmet;
  nastavnikNaRealizaciji: NastavnikNaRealizaciji;
  obavjestenje: Obavjestenje[];
}
