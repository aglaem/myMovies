import axios from 'axios';

const options = {
    url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWM4ZjFiYzE3YjA3OGVjZWIyZmEyZjQyOWQzYjAxNyIsIm5iZiI6MTc2NDE2MjUzMy41NDU5OTk4LCJzdWIiOiI2OTI2ZmJlNWUwYzRjYWZmOTFhNzU3NGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xt0NRa7ABZJVVObKmtIcquHbazNtLKCBJkPcsDhMl2c'
  }
};

export const getMovies = async () => {
        const moviesFromTMDB = await axios.get(options.url, options);
        return moviesFromTMDB.data.results;
}