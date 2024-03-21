import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";


const useNowPlayingMovie = async()=>{
    const dispatch = useDispatch()
    try {
      const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing", options)
      dispatch(getNowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error)
    }
  }

  export default useNowPlayingMovie;