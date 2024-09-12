import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

export function AppBar({ user }) {
    const navigate = useNavigate()
    return <div className="shadow h-14 flex justify-between px-2">
        <div className="flex flex-col justify-center h-full ml-4 font-semibold">
            PAYMENTS APP
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 font-semibold">
                Hello ,
            </div>
            <div className="bg-slate-200 rounded-full h-12 w-12 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl"><Suspense fallback={"loading..."}>{
                    user.firstName && `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
                }</Suspense></div> 
            </div>
            <div className="flex items-center">
                <button onClick={() => {
                    localStorage.removeItem('token')
                    navigate('/')
                }}
                className="bg-gray-800 hover:bg-gray-900 text-white px-2 py-1 rounded-lg font-medium text-md">Logout</button>
            </div>
        </div>
    </div>
}