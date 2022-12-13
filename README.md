## Cieľ

Rozšíriť mapu v komponente
`CityPickerMap` o Carbon Aware UI funkcionalitu za pomoci knižnice SUI Headless pre React.

## Štruktúra projektu
- `src` - React aplikácia
- `api` - Express server ako proxy pre dopyty na [Carbon Aware API](https://carbon-aware-api.azurewebsites.net/swagger/index.html), ktoré na základe súradníc používateľa React aplikácie vráti uhlíkovú intenzitu elektrickej energie regiónu Azure, ktorý je ku týmto súradniciam najbližšie

## Vývoj
1. `npm install`
2. `npm start:client`
3. `npm start:proxy`

## Postup

1. Implementácia degradovaných verzií mapy tak, aby predstavovali menšiu záťaž na množstvo prenesených dát
2. Implementácia komponentu `LoaderComponent`, ktorý bude knižnicou zobrazený počas lokalizácie používateľa
3. Implementácia komponentu `SwitchComponent`, pomocou ktorého vie používateľ prepínať verziu UI
3. Na základe [dokumentácie knižnice](https://www.npmjs.com/package/@sustainableui/sui-headless-react) pridajte podporu pre primitívy Carbon Aware UI do React aplikácie
4. Použite `withSui` HOC pre `CityPickerMap`
