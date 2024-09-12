import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/inputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate()
    return (
        <div className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80 h-max p-2 px-4 text-center rounded-lg">
                    <Heading label={"Sign In"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    
                    <InputBox onChange={(e)=>setUsername(e.target.value)}  label={"Email"} placeholder="doejohn@example.com" />
                    <InputBox onChange={(e)=>setPassword(e.target.value)} label={"Password"} placeholder="*******" />

                    <div className="pt-4" >
                        <Button label={"Sign In"} onClick={async () => {
                            try {
                                const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                    username,
                                    password
                                })
                                localStorage.setItem("token", response.data.token)
                                navigate('/dashboard')
                            } catch (e) {
                                alert("Something went wrong")
                            }
                        }} />
                    </div>

                    <BottomWarning label={"Don't have an account?" } buttonText={"Sign Up"} to={"/signup"}/>
                </div>
            </div>
        </div>
    )
}