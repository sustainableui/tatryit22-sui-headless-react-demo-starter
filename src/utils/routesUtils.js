import { HASHES, ROUTES } from '../config/routes';

import { APP_NAME } from '../config';
import { CITIES } from '../config/cities';

const getConcatenatedTitle = (text) => `${APP_NAME} / ${text}`;

const getTitleFromRoute = (route) => {
  switch (route) {
    case ROUTES.VITAJTE:
      return getConcatenatedTitle('Vitajte');
    case ROUTES.O_SLUZBE:
      return getConcatenatedTitle('O službe');
    case ROUTES.POSTUP:
      return getConcatenatedTitle('Postup');
    case ROUTES.POTREBUJEM_POMOC_HASH:
      return getConcatenatedTitle('Potrebujem pomoc');
    case ROUTES.CHCEM_POMOCT_HASH:
      return getConcatenatedTitle('Chcem pomôcť');
    case ROUTES.KONTAKT:
      return getConcatenatedTitle('Kontakt');
    case ROUTES.O_NAS_HASH:
      return getConcatenatedTitle('O nás');
    case ROUTES.O_NAS:
      return getConcatenatedTitle('O nás');
    case `${ROUTES.O_NAS}${HASHES.VSEOBECNE}`:
      return getConcatenatedTitle('O nás');
    case `${ROUTES.O_NAS}${HASHES.TEAM}`:
      return getConcatenatedTitle('O nás - Team');
    case `${ROUTES.O_NAS}${HASHES.PODME_SA_ROZPRAVAT}`:
      return getConcatenatedTitle('O nás - Poďme sa rozprávať');
    case ROUTES.VYBERTE_VASE_MESTO:
      return getConcatenatedTitle('Vyberte vaše mesto');
    case ROUTES.POTREBUJEM_POMOC[0]:
      return getConcatenatedTitle('Potrebujem pomoc - Poprad');
    case ROUTES.POTREBUJEM_POMOC[1]:
      return getConcatenatedTitle('Potrebujem pomoc - Humenné');
    case ROUTES.POTREBUJEM_POMOC[2]:
      return getConcatenatedTitle('Potrebujem pomoc - Piešťany');
    case ROUTES.POTREBUJEM_POMOC[3]:
      return getConcatenatedTitle('Potrebujem pomoc - Kysucké Nové Mesto');
    case ROUTES.POTREBUJEM_POMOC[4]:
      return getConcatenatedTitle('Potrebujem pomoc - Prešov');
    case ROUTES.POTREBUJEM_POMOC[5]:
      return getConcatenatedTitle('Potrebujem pomoc - Trnava');
    default:
      return APP_NAME;
  }
};

export const setDocumentTitleFromRoute = (route) => {
  document.title = getTitleFromRoute(route);
};

export const getRouteFromCity = (city) => {
  switch (city) {
    case CITIES.POPRAD.NAME:
      return ROUTES.POTREBUJEM_POMOC[0];
    case CITIES.HUMENNE.NAME:
      return ROUTES.POTREBUJEM_POMOC[1];
    case CITIES.PIESTANY.NAME:
      return ROUTES.POTREBUJEM_POMOC[2];
    case CITIES.KYSUCKE_NOVE_MESTO.NAME:
      return ROUTES.POTREBUJEM_POMOC[3];
    case CITIES.PRESOV.NAME:
      return ROUTES.POTREBUJEM_POMOC[4];
    case CITIES.TRNAVA.NAME:
      return ROUTES.POTREBUJEM_POMOC[5];
    default:
      return ROUTES.DOMOV;
  }
};

export const getCityFromRoute = (route) => {
  switch (route) {
    case `${ROUTES.POTREBUJEM_POMOC_BASE}${CITIES.POPRAD.ROUTE}`:
      return CITIES.POPRAD.NAME;
    case `${ROUTES.POTREBUJEM_POMOC_BASE}${CITIES.PRESOV.ROUTE}`:
      return CITIES.PRESOV.NAME;
    case `${ROUTES.POTREBUJEM_POMOC_BASE}${CITIES.HUMENNE.ROUTE}`:
      return CITIES.HUMENNE.NAME;
    case `${ROUTES.POTREBUJEM_POMOC_BASE}${CITIES.PIESTANY.ROUTE}`:
      return CITIES.PIESTANY.NAME;
    case `${ROUTES.POTREBUJEM_POMOC_BASE}${CITIES.KYSUCKE_NOVE_MESTO.ROUTE}`:
      return CITIES.KYSUCKE_NOVE_MESTO.NAME;
    case `${ROUTES.POTREBUJEM_POMOC_BASE}${CITIES.TRNAVA.ROUTE}`:
      return CITIES.TRNAVA.NAME;
    default:
      return '';
  }
};
