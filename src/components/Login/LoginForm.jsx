/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import InputField from "./InputField";

import { LuUser } from "react-icons/lu";
import { MdVpnKey } from "react-icons/md";

export default function LoginForm({loginUrl})
{
  
  const [emailInput, changeEmailInputValue] = useState(undefined)
  const [passwordInput, changePasswordInputValue] = useState(undefined)
  const [buttonStatus, changeButtonStatus] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(loginUrl, {
        email : emailInput,
        password : passwordInput
      }, {withCredentials : true});
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
        <InputField fieldType={"email"} fieldName={"Email"} fieldIcon={<LuUser size={30}/>} fieldValue={emailInput} setFieldValue={changeEmailInputValue}/>
        <InputField fieldType={"password"} fieldName={"Password"} fieldIcon={<MdVpnKey size={30}/>} fieldValue={passwordInput} setFieldValue={changePasswordInputValue}/>

      <div onClick={handleSubmit} className={`flex justify-center rounded-md p-3 transition-all shadow-lg ${buttonStatus ? "bg-gradient-to-br from-purple-600 to-purple-300": "bg-gradient-to-tr from-purple-600 to-priFront"}`}> Submit </div>
      <a href="" className="text-purple-600">Forgot Password?</a>
    </form>
  );
}