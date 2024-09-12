import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect, useState } from "react";
import axios from "axios";

export function Dashboard() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [account, setAccount] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/me", {
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        }).then(response => {          
                const { user, account } = response.data
                setUser(user)
                setAccount(account)            
        }).catch(() => {
            navigate('/signin')
        })
    }, [])
    
    return (
        <div>
            <AppBar user={user} />
            <div className="m-5 pt-5">
                <Balance value={account.balance} />
                <Users currentUser={user._id} />
            </div>
            
        </div>
    )
}