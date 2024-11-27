import Navbar from "./Navbar/Navbar"
import { Outlet } from "react-router-dom"
export default function Layout()
{
    return (
        <div className="flex h-screen flex-col bg-cover bg-[url(/home/sirkartik/vscode/esports_website_react/frontend/src/assets/images/Sprinkle-mobile.svg)] md:sm:bg-[url(/home/sirkartik/vscode/esports_website_react/frontend/src/assets/images/Sprinkle.svg)] min-h-screen">
            <Navbar/>
            <div className="h-[89%]">
                <Outlet/>
            </div>
        </div>
    )
}