
export function SendMoney() {
    return (
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen flex justify-center items-center">
            <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white w-80 h-max text-center rounded p-2 px-4">
                <div className="font-bold text-3xl">Send Money</div>
                <div className="pt-10">
                    <div className="text-left flex gap-2">
                        <div className="bg-green-500 text-white h-8 w-8 rounded-full flex justify-center items-center">                         
                            A                            
                        </div>
                        <div className="flex flex-col justify-center ml-2 font-semibold text-xl">
                            Friend's Name
                        </div>
                    </div>
                    <br />
                    <div className="space-y-4">
                        <div className="text-left font-semibold space-y-2">
                            <label >Amount (in Rs)</label>
                            <input className="border border-slate-200 w-full rounded px-2 py-1" type="text" placeholder="Enter amount"></input>
                        </div>
                        <button className="border-none bg-green-500 hover:bg-green-600 w-full text-white py-1 font-semibold text-lg rounded-md">
                            Initiate Tranfer
                        </button>                        
                    </div>
                </div>
            </div>
        </div>
    )
}