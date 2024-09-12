import { useState } from "react"
import { Button } from "./Button"
export function Users() {

    const [users, setUsers] = useState([{
        firstName: "Himanshu",
        lastName: "Joshi",
        _id:1
    },
    {
        firstName: "Raman",
        lastName: "Singhal",
        _id:1
    }])

    return <div className="pt-5">
        <div className="font-bold text-lg">
            Users
        </div>
        <div className="py-2">
            <input className="border border-slate-300 rounded-lg px-2 py-1 w-full" type="text" placeholder="Search Users....."></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
        

    </div>
}

function User({ user }) {
    return (
        <div className="flex justify-between mb-2 pb-2 border-b-2 border-slate-100 ">
            <div className="flex">
                <div className="bg-slate-200 h-12 w-12 rounded-full flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">{user.firstName[0]}{user.lastName[0]}</div>
                </div>
                <div className="flex flex-col justify-center">
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full mt-1">
                <Button label={"Send Money"}></Button>
            </div>
        </div>
        
    )
    
}