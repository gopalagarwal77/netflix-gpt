import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/993710/videos?language=en-US";
  const getMoviesVideos = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};
export default useMovieTrailer;
