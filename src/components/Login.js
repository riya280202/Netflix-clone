import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { setIsLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginhandler = () => {
    setIsLogin(!isLogin);
  };

  const isLoading = useSelector(store => store.app.isLoading)

  const getInputData = async (e) => {
    
    e.preventDefault();
    dispatch(setIsLoading(true))
    if (isLogin) {
      try {
        const res = await axios.post(`${API_END_POINT}/login`, {
          email,
          password,
        },{
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
        if(res.data.success){
          toast.success(res.data.message)
          
        } 
        dispatch(setUser(res.data.user))
        navigate("/browse")
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally{
        dispatch(setIsLoading(false))
      }
    } else {
      try {
        const res = await axios.post(`${API_END_POINT}/register`, {
          fullName,
          email,
          password,
        },{
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
        if(res.data.success){
          toast.success(res.data.message)
          setIsLogin(true)
        } 
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }finally{
        dispatch(setIsLoading(false))
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
          alt="netflix-cover"
        />
      </div>
      <form
        className="absolute flex flex-col my-36 w-3/12 left-0 right-0 mx-auto items-center justify-center bg-black p-8 opacity-90 rounded-md"
        onSubmit={getInputData}
      >
        <h1 className="text-white text-3xl mb-5 font-bold">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col items-center justify-center">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="FULL NAME"
              className="outline-none p-3 m-2 rounded-sm bg-gray-600 text-white"
            />
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL"
            className="outline-none p-3 m-2 rounded-sm bg-gray-600 text-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PASSWORD"
            className="outline-none p-3 m-2 rounded-sm bg-gray-600 text-white"
          />
          <button className="bg-red-600 text-white w-[93%] mt-6 p-3 rounded-sm font-medium">{
           `${isLoading ? "Loading....": (isLogin ? "Login" : "Signup")}`
          }
            
          </button>
          <p className="text-white cursor-pointer mt-2" onClick={loginhandler}>
            {!isLogin
              ? "Already have an account?Login"
              : "New to Netflix? Signup"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
