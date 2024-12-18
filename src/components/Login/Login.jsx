/* eslint-disable react/prop-types */

import { useState } from 'react';
import SlidingSwitch from './SlidingSwitch';

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'



const LoginPage = ({loginUrl, registerUrl, getOtpUrl}) => {
    const [mode, setMode] = useState(true);
  
    return (
      // Replace image path with relative paths
        <div className="bg-cover bg-[url(/home/sirkartik/vscode/esports_website_react/frontend/src/assets/images/background_login.jpg)] w-screen h-screen p-5">
            <div className="w-full h-full rounded-xl flex flex-col justify-around bg-white/40 backdrop-blur-md">
                <div className="flex flex-col justify-center space-y-8 max-w-xs self-center">
                    <h2 className="self-center font-Protest text-4xl">{mode ? "LOGIN" : "REGISTER"}</h2>
                    <SlidingSwitch isVisible={mode} setIsVisible={setMode}/>
                    {mode ? <LoginForm loginUrl={loginUrl}/>: <RegisterForm registerUrl={registerUrl} getOtpUrl={getOtpUrl} setFormMode={setMode}/>}
                </div>
            </div>
        </div>
    );
};


export default LoginPage;
