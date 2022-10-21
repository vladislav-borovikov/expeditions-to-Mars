import axios from "axios";

const API_KEY = "zjl1b2k2fFQc4LNeoLN6Ej2PIHzEjdegZVkVTFZC";
axios.defaults.baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/";

export async function Api(filter, page) {
  const response = await axios.get(
    `/${filter.rover}/photos?sol=${filter.sol}&camera=${filter.camera}&api_key=${API_KEY}&page=${page}`
  );
  return response?.data;
}
