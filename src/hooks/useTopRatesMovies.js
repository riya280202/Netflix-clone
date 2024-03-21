import axios from "axios"
import { useDispatch } from "react-redux"
import { options } from "../utils/constant"
import { getTopRatedMovies } from "../redux/movieSlice"


const useTopRatedMovies = async()=>{
    const dispatch = useDispatch()
    try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated", options)
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}


export default useTopRatedMovies;