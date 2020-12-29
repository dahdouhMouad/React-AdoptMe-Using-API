import React,{useState} from 'react'

const useDropdown = (label,defaultStat,options) => {
    const [state , setStat] = useState(defaultStat);
    const id = `use-dropdown-${label.replace(" ","").toLowerCase()}`;
    const Dropdown = ()=>(
    <label htmlFor={id}>
        {label}
        <select id={id}
        value = {state}
        onChange ={e=> setStat(e.target.value)}
        onBlur = {e=>setStat(e.target.value)}
        disabled = {options.length ===0}>
            <option >All</option>
            
            {options.map(item=>(
            <option value={item} key={item}>{item}</option>
            ))}

        </select>    
    </label>
    );


  return [state,Dropdown,setStat]
} ;
export default useDropdown