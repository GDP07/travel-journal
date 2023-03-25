import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Data from "./components/Data"

export default function App(){

  const card = Data.map((data)=>{
    return(
      <Card 
      key={data.imageUrl}
      {...data}
      />
    )
  })
  return(
    <div className="main">
      <Navbar />
      <div className="card-container">
        {card}
      </div>
    </div>
  )
}