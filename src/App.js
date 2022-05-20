import './App.css'
import React, { useEffect, useState } from 'react'

const API_URL = 'https://thecatapi.com?api_key=04075186-a95b-4d78-9169-42ecc5a9b6ef'

const App = () => {
  const [cats, setCats] =  useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    searchCats('Bengal')
  }, [])
// console.log('i am here')

  return (
    <div classname="app">
     
      </div>
    )
  }

  export default App 