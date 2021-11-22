import {client} from '../Api/client';

export const getAllHotels = async (lat, long, type, ApiKey) => {
  // location=-33.8670522%2C151.1957362&radius=1500&type=hotel&keyword=cruise&key=${ApiKey}
  let allTHings = await client.get(
    `/json?location=${lat}%2C${long}&radius=15000&type=${type}&keyword=cruise&key=${ApiKey}`,
  );

  return allTHings;
};
