import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const ShowCategory = ({category}) => {
  
  const [gifs, setGifs] = useState([]);
  
  useEffect(()=> {
    getGifs(category).then((imgs)=> {setGifs(imgs)})
  }, [category])
  
  
    return (
        <div>
         <h2>{category}</h2>
          {gifs.map(({url,title,id})=> (
              <img key={id} src={url} alt="true"/>
          ))}  
        </div>
    )
}
