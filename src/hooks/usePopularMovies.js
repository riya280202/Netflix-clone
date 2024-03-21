import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";

const usePopularMovies = async()=>{
    const dispatch = useDispatch()
    try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular", options)
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}


export default usePopularMovies;