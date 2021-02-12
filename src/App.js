import React, { useState } from 'react';
import { CreateCategory } from './components/CreateCategory';
import { ShowCategory } from './components/ShowCategory';



function App() {
  
  const [categories, setCategories] = useState([]);

  function addCategory (category) {
    setCategories((prevCategories) => [category, ...prevCategories])
  }
  
  
  
  return (
    <div>
      <h1> GiphyApp</h1>
      <CreateCategory addCategory={addCategory} />
      {categories.map((category)=> {
        return <ShowCategory key={category} category={category}/>
      })}
    </div>
  )
}

export default App;
