import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText,to }) {
    return <div className="py-2 text-sm flex justify-center">
        <div className="text-slate-500">{label}</div>
        <Link className="text-black underline pl-1 cursor-pointer" to={to}> {buttonText}</Link>
    </div>
    
}