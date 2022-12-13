const express = require('express');
const cors = require('cors');

const { getClosestAzureRegion, randomFloatFromInterval } = require('./utils');
const AZURE_REGIONS = require('./azure-regions.json');

const PORT = 3001;
const TIMEOUT = 1300;

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
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

  const randomRating = randomFloatFromInterval(0, 450, 2);

  setTimeout(() => {
    console.log(
      `lat ${lat}; lon ${lon}; value: ${randomRating}; measurementRegion: ${closestAzureRegion};`
    );

    res.status(200).json({ value: randomRating, measurementRegion: closestAzureRegion });
  }, TIMEOUT);
});
