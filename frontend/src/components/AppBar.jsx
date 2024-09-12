
export function AppBar() {
    return <div className="shadow h-14 flex justify-between px-2">
        <div className="flex flex-col justify-center h-full ml-4 font-semibold">
            PAYMENTS APP
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 font-semibold">
                Hello ,
            </div>
            <div className="bg-slate-200 rounded-full h-12 w-12 flex justify-center mt-1 mr-2">
               <div className="flex flex-col justify-center h-full text-xl">U</div> 
            </div>
        </div>
    </div>
}