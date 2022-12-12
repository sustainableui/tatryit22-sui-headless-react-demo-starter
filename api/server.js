const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const getClosestAzureRegion = require('./utils/getClosestAzureRegion');
const AZURE_REGIONS = require('./azure-regions.json');

const CARBON_AWARE_API = 'https://carbon-aware-api.azurewebsites.net';
const PORT = 3001;

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

app.get('/api/grid-carbon-intensity', async (req, res) => {
  const {
    query: { lat, lon }
  } = req;

  if (!lat || !lon) {
    console.error(`missing location`);
    res.status(403);
    return;
  }

  const closestAzureRegion = getClosestAzureRegion({ lat, lon }, AZURE_REGIONS);

  const gridIntensityResponse = await fetch(
    `${CARBON_AWARE_API}/emissions/bylocation?location=${closestAzureRegion}`
  );

  if (gridIntensityResponse.status === 200) {
    const value = await gridIntensityResponse.json();

    console.log(
      `lat ${lat}; lon ${lon}; value: ${value[0].rating}; measurementRegion: ${closestAzureRegion};`
    );

    res.status(200).json({ value: value[0].rating, measurementRegion: closestAzureRegion });
  } else {
    console.error(`lat ${lat}; lon ${lon}; ${gridIntensityResponse.statusText}`);

    res.status(200).json({ value: null, measurementRegion: null });
  }
});
