import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/inputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin() {
    return (
        <div className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80 h-max p-2 px-4 text-center rounded-lg">
                    <Heading label={"Sign In"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    
                    <InputBox label={"Email"} placeholder="doejohn@example.com" />
                    <InputBox label={"Password"} placeholder="*******" />

                    <div className="pt-4" >
                        <Button label={"Sign In"} onClick={()=>alert("Sign in Clicked")} />
                    </div>

                    <BottomWarning label={"Don't have an account?" } buttonText={"Sign Up"} to={"/signup"}/>
                </div>
            </div>
        </div>
    )
}