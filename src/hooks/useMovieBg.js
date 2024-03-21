import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovieKey } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieBg = async(movieId) => {
    const dispatch = useDispatch()
    useEffect(()=> {
        const getMovieById = async () => {
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
        getMovieById();
    }, [])
    
}

export default useMovieBg;