import React, { useState } from 'react'

export const CreateCategory = ({addCategory}) => {
    
    const [category, setCategory] = useState("")

    function handleChange(e){
      setCategory(e.target.value)
    }
    
    
    
    
    return (
        <div>
           <form>
           <input
            onChange={(e)=> handleChange(e)}
            type="text"
            placeholder="Gif"
            value={category}
            />
            <button onClick={(e)=> {
                addCategory(category);
                setCategory("");
                e.preventDefault();
            }}>
                search
            </button>
           </form>
           
        </div>
    )
}
