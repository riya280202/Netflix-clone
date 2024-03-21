import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovieKey } from "../redux/movieSlice";

const useMovieBg = async(movieId) => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
        const trailer = res?.data?.results?.filter((item)=> {
            return item.type==="Trailer"
        })
        dispatch(getTrailerMovieKey(trailer.length>0 ? trailer[0].key: res.data.results[0].key))
    } catch (error) {
        console.log(error)
    }
}

export default useMovieBg;