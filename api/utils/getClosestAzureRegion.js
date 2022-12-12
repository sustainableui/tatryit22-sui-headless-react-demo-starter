const distance = require('./distance');

module.exports = function getClosestAzureRegion(userCoords, azureRegions) {
  const azureRegionsDistances = azureRegions.map((azureRegion) =>
    distance(userCoords, {
      lat: azureRegion.Latitude,
      lon: azureRegion.Longitude
    })
  );

  const closestAzureRegionDistance = Math.min(...azureRegionsDistances);

  const closestAzureRegionIndex = azureRegionsDistances.findIndex(
    (azureRegionsDistance) => azureRegionsDistance === closestAzureRegionDistance
  );

  return azureRegions[closestAzureRegionIndex].RegionName;
};
