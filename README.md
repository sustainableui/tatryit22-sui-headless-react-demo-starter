## Úloha

Rozšírte mapu v komponente
`Map` o Carbon Aware UI funkcionalitu za pomoci knižnice SUI Headless pre React. Na základe [dokumentácie knižnice](https://www.npmjs.com/package/@sustainableui/sui-headless-react) pridajte podporu pre primitívy Carbon Aware UI do React aplikácie, ktorá umožní inkrementálne pridávať podporu pre komponenty s ohľadom na uhlík.

## Štruktúra projektu
- `src` - React aplikácia
- `api` - Express server ako proxy pre dopyty na [Carbon Aware API](https://carbon-aware-api.azurewebsites.net/swagger/index.html), ktoré na základe súradníc používateľa React aplikácie vráti uhlíkovú intenzitu elektrickej energie regiónu Azure, ktorý je ku týmto súradniciam najbližšie

## Príprava na vývoj
1. `npm run setup`
2. `npm run start:client`
3. `npm run start:proxy` (ak nie je Carbon Aware API dostupné, `npm run start:fake-proxy`)

## Postup

1. Implementácia degradovaných verzií mapy tak, aby predstavovali menšiu záťaž na množstvo prenesených dát
    - keď je výroba elektriny **"špinavá"** (nízky režim zobrazenia), vykresľujte len zoznam miest
    - keď je výroba elektriny **"čistá"** (vysoký režim zobrazenia), vykresľujte súčasnú mapu
    - keď je výroba elektriny niečo **medzi "špinavá" a "čistá"** (mierny režim zobrazenia), len vykreslite mapu `slovakia.svg` (`src/assets/images/slovakia.svg`)
2. Implementácia komponentu `LoaderComponent`, ktorý bude knižnicou zobrazený počas lokalizácie používateľa
    - po stlačení tlačidla sa má zavolať `onLocalizationCancel` callback funkcia
    - použite tlačidlo `src/components/elements/Button`
3. Implementácia komponentu `SwitchComponent`, pomocou ktorého vie používateľ prepínať verziu UI
    - komponent vykresľuje 3 rôzne tlačidlá pričom každé zodpovedá za nastavenie jedného režimu zobrazenia
    - po stlačení tlačidla sa má zavolať `onDisplayModeSelect` callback funkcia, ktorá má parameter `displayMode`
    - možné režimy zobrazenia sú definované v TypeScript enumerácii, ktoré je možné naimportovať a použiť:
        - `import { SuiDisplayModes } from '@sustainableui/sui-headless-react/src/base/types';`

## Riešenie

Vo vetve `solution` je implementované riešenie úlohy.

## Príklady


- POC implementácia Carbon Aware UI primitív pre React - Carbon Hack 22 demo
    - NextJS, MUI, Vercel
    - https://github.com/sustainableui/ch22-sui-headless-react-demo

## Užitočné zdroje

- [Carbon Hack 22 video](https://www.youtube.com/watch?v=aKOKBu7stPI) projektu Sustainable UI
- [Carbon Hack 22 textový výstup](https://taikai.network/gsf/hackathons/carbonhack22/projects/cl8j1ex3h2845301s653mtnk87/idea) projektu Sustainable UI
- [Green Mode Design](https://ismaelvelasco.dev/series/green-mode-design) princípy od Ismaela Velasca
- [Branch Magazine](https://branch.climateaction.tech/)
