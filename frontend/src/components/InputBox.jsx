

export function InputBox({ label, placeholder }) {
    return <div>
        <div className="text-left font-medium text-sm py-2">
            <label>{label}</label>
        </div>            
        <input className="w-full py-1 px-2  border border-slate-200 rounded" type="text" placeholder={placeholder}/>
    </div>
    
}