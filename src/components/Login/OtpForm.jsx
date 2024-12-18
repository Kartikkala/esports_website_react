/* eslint-disable react/prop-types */
import { useState } from "react"
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import axios from "axios";
import InputField from "./InputField";

export default function OtpForm({getOtpUrl, email, setEmail, changeMode}){
    const [buttonStatus, changeButtonStatus] = useState(false)

    const onEmailSubmit = async ()=>{
        changeButtonStatus(true)
        let response = undefined
        try{
            response = await axios.post(getOtpUrl, {
                email
            })
            if(response.status === 200 && response.data.triesLeft > 0)
            {
                if(response.data.success)
                {
                    alert("OTP sent to email!")
                    changeMode((mode)=>mode=!mode)
                }
                else
                {
                    alert(`You need to wait ${response.data.minTimeToWait/1000} secs before retyring!`)
                }
            }
            else if(response.status === 200 && response.triesLeft === 0)
            {
                alert("You are out of tries for getting OTP")
            }
        }
        catch(e)
        {
            alert("Some error occured!")
        }
    }

    return(
      <form className="space-y-6 flex flex-col">
      <InputField fieldType={"email"} fieldName={"Email"} fieldIcon={<MdOutlineDriveFileRenameOutline size={30}/>} fieldValue={email} setFieldValue={setEmail} disabled={false}/>

      <button type="button" onClick={onEmailSubmit} className={`rounded-md p-3 transition-all shadow-lg ${buttonStatus ? "bg-gradient-to-br from-purple-600 to-purple-300": "bg-gradient-to-tr from-purple-600 to-priFront"}`}> Submit </button>
      <a href="" className="text-purple-600">Forgot Password?</a>
    </form>
    )
}