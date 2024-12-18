/* eslint-disable react/prop-types */
import { useState } from "react"
import { LuUser } from "react-icons/lu";
import { MdVpnKey } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import axios from 'axios'
import OtpForm from './OtpForm'
import InputField from './InputField'

export default function RegisterForm({getOtpUrl, registerUrl, setFormMode}){
    const [email, setEmail] = useState(undefined)
    const [otp, setOtp] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [confirmedPass, setConfirmedPass] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [mode, setMode] = useState(false)
    const [buttonStatus, changeButtonStatus] = useState(false)


    const onFormSubmit = async ()=>{
        changeButtonStatus(true)
        try{
            const response = await axios.post(registerUrl, {
                email,
                otp,
                password,
                name
            })
            if(response.status === 200)
            {
                setFormMode((formMode)=>formMode = !formMode)
                return alert("Registration Successful! Please Login now!")
            }
        }
        catch(e)
        {
            if(e.response && e.response.status === 400)
            {
                setMode((mode)=>mode = !mode)
                setConfirmedPass(undefined)
                setPassword(undefined)
                setName(undefined)
                setOtp(undefined)
                return alert("This email is already registered!")
            }
            alert("Some error occured!")
        }
    }

  return(
    mode ?
    <form className="space-y-6 flex flex-col">

    <InputField fieldType={"email"} fieldName={"Email"} fieldIcon={<MdOutlineDriveFileRenameOutline size={30}/>} fieldValue={email} setFieldValue={setEmail} disabled={true}/>
    <InputField fieldType={"text"} fieldName={"OTP"} fieldIcon={<MdVpnKey size={30}/>} fieldValue={otp} setFieldValue={setOtp}/>
    <InputField fieldType={"text"} fieldName={"Name"} fieldIcon={<LuUser size={30}/>} fieldValue={name} setFieldValue={setName}/>
    <InputField fieldType={"password"} fieldName={"Password"} fieldIcon={<MdVpnKey size={30}/>} fieldValue={password} setFieldValue={setPassword}/>
    <InputField fieldType={"password"} fieldName={"Confirm Password"} fieldIcon={<MdVpnKey size={30}/>} fieldValue={confirmedPass} setFieldValue={setConfirmedPass}/>

    <div type="button" onClick={onFormSubmit} className={`flex justify-center rounded-md p-3 transition-all shadow-lg ${buttonStatus ? "bg-gradient-to-br from-purple-600 to-purple-300": "bg-gradient-to-tr from-purple-600 to-priFront"}`}> Submit </div>
    <a href="" className="text-purple-600">Forgot Password?</a>
  </form>:
  <OtpForm getOtpUrl={getOtpUrl} changeMode={setMode} email={email} setEmail={setEmail}/>
  )
}