import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTVShows} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTVShows = () => {
  const dispatch = useDispatch();

  const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';  
  const getTVShows = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTVShows(json.results));
  };

  useEffect(() => {
    getTVShows();
  }, []);
};

export default useTVShows;
