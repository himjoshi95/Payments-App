import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/inputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

export function Signup() {
    return (
        <div className="h-screen bg-slate-400 flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white w-80 h-max rounded-lg text-center p-2 px-4">

                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your information to create an account"} />
                    
                    <InputBox label={"First Name"} placeholder="John"/>
                    <InputBox label={"Last Name"} placeholder="Doe"/>
                    <InputBox label={"Email"} placeholder="doejohn@example.com" />
                    <InputBox label={"Password"} placeholder="*****" />

                    <div className="pt-4">
                        <Button label={"Sign up"} />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={'/signin'} />                    
                </div>
            </div>

        </div>
        
    )
}