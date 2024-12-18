/* eslint-disable react/prop-types */
import { useRef } from "react"

export default function InputField({fieldName, fieldType = "text", fieldIcon, fieldValue, setFieldValue, disabled = false})
{
    const ref = useRef(null)

    const handleDivClick = ()=>{
        if(ref)
        {
            ref.current.focus()
        }
      }
    return(
        <div className="relative w-full h-full flex">
        <div onClick={handleDivClick} className={`absolute z-10 flex w-full top-3 left-3 items-center gap-3 ${fieldValue ? "opacity-0": "opacity-100"}`}>{fieldIcon}{fieldName}</div>
        <input value={fieldValue ? fieldValue : ''} disabled={disabled} ref={ref} onChange={(e) => setFieldValue(e.target.value)} type={fieldType} className="relative hover:bg-purple-100/50 hover:p-4 p-4 focus:z-30 focus:outline-none focus:bg-purple-100/75 focus:p-5 outline-none shadow-lg w-full sm:text-sm rounded-xl bg-purple-100 duration-200"/>
        </div>
    )
}