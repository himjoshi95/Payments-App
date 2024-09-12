import { useCallback, useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Users({ currentUser }) {
    
    const [users, setUsers] = useState([])
    const [filter,setFilter] = useState("")

    let token = localStorage.getItem('token')
    const debounce = (callback, debouncedTime = 500) => {
        let timer;
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback.apply(this,args)
            },debouncedTime)
        }
    }
    //added debouncing here
    useEffect(() => {
        // callAPI(filter)   
        debouncedAPICall(filter)
    }, [filter])
    
    // memoise the function as otherwise on every render it will get redefined
    const debouncedAPICall = useCallback(debounce((value)=>callAPI(value),300),[]) 

   

    const callAPI = (filter) => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, {
            headers : {Authorization: `Bearer ${token}`}
        })
            .then(response => {
            console.log(response.data?.users)
            setUsers(response.data.users)
            })
        .catch((err)=>console.log(err))
    }

    return <div className="pt-5">
        
        <div className="font-bold text-lg">
            Users
        </div>
        <div className="py-2">
            <input onChange={(e)=>setFilter(e.target.value)} value={filter} className="border border-slate-300 rounded-lg px-2 py-1 w-full" type="text" placeholder="Search Users....."></input>
        </div>
        <div>
            {/* {users.map(user => <User key={user._id} user={user} />)} */}
            {users
                .filter(user => user._id !== currentUser) 
                .map(user => <User key={user._id} user={user} />)}
        </div>
        

    </div>
}

function User({ user }) {
    const navigate = useNavigate()
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
                <Button onClick={() => {
                    navigate("/send?id="+ user._id +"&name="+ user.firstName +" "+user.lastName)
                }} label={"Send Money"}></Button>
            </div>
        </div>
        
    )
    
}