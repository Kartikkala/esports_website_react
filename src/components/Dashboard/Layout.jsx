import Navbar from "./Navbar/Navbar"
import { Outlet } from "react-router-dom"
import axios from "axios"
import Cookies from "js-cookie"

export default function Layout()
{
    const token = Cookies.get("token")
    if(token)
    {
      axios.defaults.headers.common["Authorization"] = token
    }
    return (
        <div className="flex h-screen flex-col bg-cover bg-[url(/home/sirkartik/vscode/esports_website_react/frontend/src/assets/images/Sprinkle-mobile.svg)] md:sm:bg-[url(/home/sirkartik/vscode/esports_website_react/frontend/src/assets/images/Sprinkle.svg)] min-h-screen">
            <Navbar/>
            <div className="h-[89%]">
                <Outlet/>
            </div>
        </div>
    )
}