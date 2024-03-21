import { useDispatch } from "react-redux"
import { options } from "../utils/constant"
import axios from "axios"
import { getUpcomingMovies } from "../redux/movieSlice"

const useUpcomingMovies = async()=>{
    const dispatch = useDispatch()
    try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming", options)
        dispatch(getUpcomingMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}

export default useUpcomingMovies;