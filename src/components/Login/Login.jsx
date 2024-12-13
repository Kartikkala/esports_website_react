/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SlidingSwitch from './SlidingSwitch';
import axios from 'axios';

// Icons
import { LuUser } from "react-icons/lu";
import { MdVpnKey } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
// Icons


const LoginPage = ({loginUrl, registerUrl}) => {
    const [isVisible, setIsVisible] = useState(true);
  
    return (
      // Replace image path with relative paths
        <div className="bg-cover bg-[url(/home/sirkartik/vscode/esports_website_react/frontend/src/assets/images/background_login.jpg)] w-screen h-screen p-5">
            <div className="w-full h-full rounded-xl flex flex-col justify-around bg-white/40 backdrop-blur-md">
                <div className="flex flex-col justify-center space-y-8 max-w-xs self-center">
                    <h2 className="self-center font-Protest text-4xl">{isVisible ? "LOGIN" : "REGISTER"}</h2>
                    <SlidingSwitch isVisible={isVisible} setIsVisible={setIsVisible}/>
                    {isVisible ? <LoginForm loginUrl={loginUrl}/>: <RegisterForm/>}
                </div>
            </div>
        </div>
    );
};


function LoginForm({loginUrl})
{
  
  const [emailInput, changeEmailInputValue] = useState(0)
  const [passwordInput, changePasswordInputValue] = useState(0)
  const [buttonStatus, changeButtonStatus] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(loginUrl, {
        email : emailInput,
        password : passwordInput
      }, {withCredentials : true});

      console.log("Login successful:", response.data);
      if(response.data.success)
      {
        navigate("/")
      }

    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    } 
    changeButtonStatus(true)
  };
  return (
    <form className="space-y-6 flex flex-col">
      <div className="relative w-full h-full flex">
      <div className={`absolute z-10 flex place-items-center justify-center w-full max-w-32 top-3 gap-3 ${emailInput ? "opacity-0": "opacity-100"}`}><LuUser size={30}/>Email</div>
      <input onChange={(e) => changeEmailInputValue(e.target.value)} type="email" name="email-address" id="email-address" className="relative hover:bg-purple-100/50 hover:p-4 p-4 focus:z-30 focus:outline-none focus:bg-purple-100/75 focus:p-5 outline-none shadow-lg w-full sm:text-sm rounded-xl bg-purple-100 duration-200"/>
      </div>

      <div className="relative w-full h-full flex">
      <div className={`absolute z-10 flex place-items-center justify-center w-full max-w-40 top-3 gap-3 ${passwordInput ? "opacity-0": "opacity-100"}`}><MdVpnKey size={30}/> Password</div>
      <input onChange={(e) => changePasswordInputValue(e.target.value)} type="password" name="password" id="password" className="relative hover:bg-purple-100/50 hover:p-4 p-4 focus:z-30 focus:outline-none focus:bg-purple-100/75 focus:p-5 outline-none shadow-lg w-full sm:text-sm rounded-xl bg-purple-100 duration-200"/>
      </div>

      <button onClick={handleSubmit} className={`rounded-md p-3 transition-all shadow-lg ${buttonStatus ? "bg-gradient-to-br from-purple-600 to-purple-300": "bg-gradient-to-tr from-purple-600 to-priFront"}`}> Submit </button>
      <a href="" className="text-purple-600">Forgot Password?</a>
    </form>
  );
}


function RegisterForm(){
  const [emailInput, changeEmailInputValue] = useState(0)
  const [passwordInput, changePasswordInputValue] = useState(0)
  const [buttonStatus, changeButtonStatus] = useState(false)
  return(
    <form className="space-y-6 flex flex-col">
    <div className="relative w-full h-full flex">
    <div className={`absolute z-10 flex place-items-center justify-center w-full max-w-28 top-3 gap-3 ${emailInput ? "opacity-0": "opacity-100"}`}><MdOutlineDriveFileRenameOutline size={30}/>Name</div>
    <input onChange={(e) => changeEmailInputValue(e.target.value)} type="email" name="email-address" id="email-address" className="relative hover:bg-purple-100/50 hover:p-4 p-4 focus:z-30 focus:outline-none focus:bg-purple-100/75 focus:p-5 outline-none shadow-lg w-full sm:text-sm rounded-xl bg-purple-100 duration-200"/>
    </div>

    <div className="relative w-full h-full flex">
    <div className={`absolute z-10 flex place-items-center justify-center w-full max-w-32 top-3 gap-3 ${passwordInput ? "opacity-0": "opacity-100"}`}><LuUser size={30}/> Email</div>
    <input onChange={(e) => changePasswordInputValue(e.target.value)} type="password" name="password" id="password" className="relative hover:bg-purple-100/50 hover:p-4 p-4 focus:z-30 focus:outline-none focus:bg-purple-100/75 focus:p-5 outline-none shadow-lg w-full sm:text-sm rounded-xl bg-purple-100 duration-200"/>
    </div>

    <div className="relative w-full h-full flex">
    <div className={`absolute z-10 flex place-items-center justify-center w-full max-w-36 top-3 gap-3 ${emailInput ? "opacity-0": "opacity-100"}`}><MdVpnKey size={30}/>Password</div>
    <input onChange={(e) => changeEmailInputValue(e.target.value)} type="email" name="email-address" id="email-address" className="relative hover:bg-purple-100/50 hover:p-4 p-4 focus:z-30 focus:outline-none focus:bg-purple-100/75 focus:p-5 outline-none shadow-lg w-full sm:text-sm rounded-xl bg-purple-100 duration-200"/>
    </div>

    <div className="relative w-full h-full flex">
    <div className={`absolute z-10 flex place-items-center justify-center w-full max-w-56 top-3 gap-3 ${emailInput ? "opacity-0": "opacity-100"}`}><MdVpnKey size={30}/>Confirm Password</div>
    <input onChange={(e) => changeEmailInputValue(e.target.value)} type="email" name="email-address" id="email-address" className="relative hover:bg-purple-100/50 hover:p-4 p-4 focus:z-30 focus:outline-none focus:bg-purple-100/75 focus:p-5 outline-none shadow-lg w-full sm:text-sm rounded-xl bg-purple-100 duration-200"/>
    </div>

    <button onClick={() => {changeButtonStatus(true)}} className={`rounded-md p-3 transition-all shadow-lg ${buttonStatus ? "bg-gradient-to-br from-purple-600 to-purple-300": "bg-gradient-to-tr from-purple-600 to-priFront"}`}> Submit </button>
    <a href="" className="text-purple-600">Forgot Password?</a>
  </form>
  )
}

export default LoginPage;
