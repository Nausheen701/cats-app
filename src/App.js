import './App.css'
import React, { useEffect, useState } from 'react'
import SearchIcon from './search.svg'
import CatCard from './CatCard'

const API_URL = 'https://thecatapi.com?api_key=04075186-a95b-4d78-9169-42ecc5a9b6ef'

const App = () => {
  const [cats, setCats] =  useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    searchCats('Bengal')
  }, [])
// console.log('i am here')

const searchCats = async (name) => {
  console.log('looking for cats')
  const response = await fetch(`${API_URL}`)
  const data = await response.json()
  console.log('trying')
  setCats(data.Search)
}

  return (
    <div classname="app">
      <h1>Cats Galore</h1>

      <div className="search">
        <input
          placeholder="Search for cats"
          value= {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img  
            src={SearchIcon}
            alt="search"
            onCLick={() => searchCats(searchTerm)}
          />
      </div>
      {
      cats?.length > 0 
      ? ( 
        <div className="container">  
          {cats.map((cat) => (
            <CatCard cat={cat} />
          ))}
        </div>
         ) : (
          <div className="empty">
            <h2>No cats found</h2>
            </div>
        )}
      </div>
    
    )
  }

  export default App 
