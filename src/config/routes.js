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
  NOT_FOUND: '*',
}

const makeId = hashRoute => hashRoute.replace('#', '').replace('/', '');

export const IDS = {
  VITAJTE: makeId(ROUTES.VITAJTE),
  O_SLUZBE: makeId(ROUTES.O_SLUZBE),
  POSTUP: makeId(ROUTES.POSTUP),
  POTREBUJEM_POMOC: makeId(ROUTES.POTREBUJEM_POMOC_HASH),
  CHCEM_POMOCT: makeId(ROUTES.CHCEM_POMOCT_HASH),
  KONTAKT: makeId(ROUTES.KONTAKT),
  O_NAS: makeId(ROUTES.O_NAS_HASH),
}

export const TITLES = {
  O_SLUZBE: "O službe",
  POSTUP: "PostuP",
  POTREBUJEM_POMOC: "Potrebujem Pomoc",
  CHCEM_POMOCT: "Chcem Pomôcť",
  KONTAKT: "Kontakt",
  O_NAS: "O nás",
}

const getConcatenatedTitle = text => `${APP_NAME} / ${text}`;

export const getTitleFromRoute = hash => {
  switch (hash) {
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
    default:
      return APP_NAME;
  }
};