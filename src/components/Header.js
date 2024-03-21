import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import {  useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {setToggle} from "../redux/movieSlice"

const Header = () => {
  const user = useSelector((store)=> store.app.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const toggle = useSelector(store => store.movie.toggle)
  const logoutHandler = async ()=>{
    try {
      const res = await axios.get(`${API_END_POINT}/logout`)
      if(res.data.success){
        toast.success(res.data.message)
      }
      dispatch(setUser(null))
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  const toggleHandler = ()=>{
    dispatch(setToggle())
  }

  return (
    <div className="absolute z-10 flex items-center justify-between w-[100%] bg-gradient-to-b from-black px-3">
      <img
        className="w-40"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt=""
      />
      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown size="24px" color="white" />
          <h1 className="ml-1 text-lg font-medium text-white">{user.fullName.toUpperCase()}</h1>
          <div className="ml-7">
            <button className="bg-red-800 text-white px-4 py-2" onClick={logoutHandler}>Logout</button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2" onClick={toggleHandler}>
              {!toggle ? "Search Movies" : "Go to Home"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
