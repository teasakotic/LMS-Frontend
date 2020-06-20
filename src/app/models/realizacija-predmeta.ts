import { Predmet } from './predmet';
import { NastavnikNaRealizaciji } from './nastavnik-na-realizaciji';
import { Obavjestenje } from './obavjestenje';

export interface RealizacijaPredmeta {
  id: number;
  predmet: Predmet;
  nastavnikNaRealizaciji: NastavnikNaRealizaciji;
  obavjestenje: Obavjestenje[];
}
