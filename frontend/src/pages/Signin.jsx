import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/inputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin() {
    return (
        <div className="h-screen bg-slate-400 flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white w-80 h-max p-2 px-4 text-center rounded-lg">
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