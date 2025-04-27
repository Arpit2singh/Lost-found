import { useState } from 'react'

import './App.css'

import React from 'react'
import Header from './components/pages/Elements/Header'
import Home from './components/pages/Home'
import AddItem from './components/AddItem'
import LostItemList from './components/pages/LostItemList'
import { ItemContext , ItemContextProvider } from './components/context/ItemContext'

const App = () => {
  return (
    <div>
      <ItemContextProvider>
    {/* <Home/> */}
     {/* <AddItem/> */} 

     <LostItemList/>
     </ItemContextProvider>
    </div>
  )
}

export default App