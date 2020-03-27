import { APP_NAME } from ".";
import { CITIES } from "./cities"

export const ROUTES = {
  DOMOV: '/',
  VITAJTE: '/#vitajte',
  O_SLUZBE: '/#o-sluzbe',
  POSTUP: '/#postup',
  POTREBUJEM_POMOC_HASH: '/#potrebujem-pomoc',
  POTREBUJEM_POMOC: [
    CITIES.POPRAD.ROUTE,
    CITIES.TRNAVA.ROUTE,
    CITIES.HUMENNE.ROUTE,
    CITIES.PIESTANY.ROUTE,
  ],
  CHCEM_POMOCT_HASH: '/#chcem-pomoct',
  CHCEM_POMOCT: '/chcem-pomoct',
  VYBERTE_VASE_MESTO: '/vyberte-vase-mesto',
  KONTAKT: '/#kontakt',
  O_NAS: '/o-nas',
  O_NAS_HASH: '/#o-nas',
  TEAM: `/o-nas#team`,
  NOT_FOUND: '*',
}

const HASHES = {
  VSEOBECNE: '#vseobecne',
  TEAM: "#team",
  PODME_SA_ROZPRAVAT: '#podme-sa-rozpravat',
}

const makeId = hashRoute => hashRoute.replace('#', '').replace('/', '');

export const IDS = {
  VITAJTE: makeId(ROUTES.VITAJTE),
  O_SLUZBE: makeId(ROUTES.O_SLUZBE),
  POSTUP: makeId(ROUTES.POSTUP),
  POTREBUJEM_POMOC: makeId(ROUTES.POTREBUJEM_POMOC_HASH),
  CHCEM_POMOCT: makeId(ROUTES.CHCEM_POMOCT_HASH),
  KONTAKT: makeId(ROUTES.KONTAKT),
  O_NAS_HASH: makeId(ROUTES.O_NAS_HASH),
  O_NAS: makeId(HASHES.VSEOBECNE),
  TEAM: makeId(HASHES.TEAM),
  PODME_SA_ROZPRAVAT: makeId(HASHES.PODME_SA_ROZPRAVAT),
}

export const TITLES = {
  O_SLUZBE: "O službe",
  POSTUP: "PostuP",
  POTREBUJEM_POMOC: "Potrebujem Pomoc",
  CHCEM_POMOCT: "Chcem Pomôcť",
  KONTAKT: "Kontakt",
  O_NAS: "O nás",
}

const getConcatenatedTitle = text => `${APP_NAME} / ${text} [CLOSED ALPHA]`;

const getTitleFromRoute = route => {
  switch (route) {
    case ROUTES.VITAJTE:
      return getConcatenatedTitle("Vitajte");
    case ROUTES.O_SLUZBE:
      return getConcatenatedTitle("O službe");
    case ROUTES.POSTUP:
      return getConcatenatedTitle("Postup");
    case ROUTES.POTREBUJEM_POMOC_HASH:
      return getConcatenatedTitle("Potrebujem pomoc");
    case ROUTES.CHCEM_POMOCT_HASH:
      return getConcatenatedTitle("Chcem pomôcť");
    case ROUTES.KONTAKT:
      return getConcatenatedTitle("Kontakt");
    case ROUTES.O_NAS_HASH:
      return getConcatenatedTitle("O nás");
    case ROUTES.O_NAS:
      return getConcatenatedTitle("O nás");
    case `${ROUTES.O_NAS}${HASHES.VSEOBECNE}`:
      return getConcatenatedTitle("O nás");
    case `${ROUTES.O_NAS}${HASHES.TEAM}`:
      return getConcatenatedTitle("O nás - Team");
    case `${ROUTES.O_NAS}${HASHES.PODME_SA_ROZPRAVAT}`:
      return getConcatenatedTitle("O nás - Poďme sa rozprávať");
    case ROUTES.VYBERTE_VASE_MESTO:
      return getConcatenatedTitle("Vyberte vaše mesto");
    case ROUTES.POTREBUJEM_POMOC[0]:
      return getConcatenatedTitle("Potrebujem pomoc - Poprad");
    case ROUTES.POTREBUJEM_POMOC[1]:
      return getConcatenatedTitle("Potrebujem pomoc - Trnava");
    case ROUTES.POTREBUJEM_POMOC[2]:
      return getConcatenatedTitle("Potrebujem pomoc - Humenné");
    case ROUTES.POTREBUJEM_POMOC[3]:
      return getConcatenatedTitle("Potrebujem pomoc - Piešťany");
    default:
      return APP_NAME;
  }
};

export const setDocumentTitleFromRoute = route => {
  document.title = getTitleFromRoute(route);
}

export const getRouteFromCity = city => {
  switch (city) {
    case CITIES.POPRAD.NAME:
      return ROUTES.POTREBUJEM_POMOC[0];
    case CITIES.TRNAVA.NAME:
      return ROUTES.POTREBUJEM_POMOC[1];
    case CITIES.HUMENNE.NAME:
      return ROUTES.POTREBUJEM_POMOC[2];
    case CITIES.PIESTANY.NAME:
      return ROUTES.POTREBUJEM_POMOC[3];
    default:
      return ROUTES.DOMOV;
  }
}

export const getCityFromRoute = route => {
  switch (route) {
    case CITIES.POPRAD.ROUTE:
      return CITIES.POPRAD.NAME;
    case CITIES.TRNAVA.ROUTE:
      return CITIES.TRNAVA.NAME;
    case CITIES.HUMENNE.ROUTE:
      return CITIES.HUMENNE.NAME;
    case CITIES.PIESTANY.ROUTE:
      return CITIES.PIESTANY.NAME;
    default:
      return "";
  }
}