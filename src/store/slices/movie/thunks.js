import { movieApi } from "../../../api/movieApi";
import { setMovies} from "./movieSlice";


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDhjZDQyMzk3ZDU2MzlhOWM1Y2EwMGQxYTRiYTdjNyIsInN1YiI6IjY1YjQyNjBjNTk0Yzk0MDE3YzNlMTQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.83rs2G_gBeop5i3p5j7tIxrT0F1y9mdAJ5C2-5ynjBE'
    }
  };

export const getMovies = ( page = 1) => {
    return async(dispatch, getState) => {
        const {data} = await movieApi.get(`/popular?language=es-ES&page=${page}`,options);
        dispatch(setMovies({movies: data.results, page: page + 1}));
    }
  }