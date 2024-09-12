import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard() {
    return (
        <div>
            <AppBar />
            <div className="m-5 pt-5">
                <Balance value={100000} />
                <Users/>
            </div>
            
        </div>
    )
}