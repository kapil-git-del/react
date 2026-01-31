import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  let myObj = {
    username : "hitesh" ,
    age : 21 
  }

  let newArr = [1,2,3] ;

  return (
    <>
    <h1 className="bg-green-400 text-green p-40 rounded-xl">Hello, how are you</h1>

{/* <Card channel="chaiaurcode" someObject={newArr} /> */}
<Card username="chaiaurcode" btnText="click me"/>
<Card username="hitesh" btnText="visit me"/>

<Card/>



    </>

  )
}

export default App













