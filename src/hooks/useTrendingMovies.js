import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

  const getTrendingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
