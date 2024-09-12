import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export function WebsiteRoot() {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/me", {
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        }).then(() => {          
            navigate('/dashboard')         
        }).catch(() => {
            navigate('/signin')
        })
        
    },[])
    return <></>   
}