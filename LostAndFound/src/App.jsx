import { useState } from 'react';
import './App.css';
import React from 'react';
import Header from './components/pages/Elements/Header';
import Home from './components/pages/Home';
import AddItem from './components/AddProduct';
import LostItemList from './components/pages/LostItemList';
import { ItemContext, ItemContextProvider } from './components/context/ItemContext';
import ItemDetail from './components/pages/Elements/ItemDetail/ItemDetail';
import Frontui from './components/pages/Frontui/Frontui';  // Keep this as it is

const App = () => {
  return (
    <div>
      <ItemContextProvider>
        <Frontui /> 
      </ItemContextProvider>
    </div>
  );
}

export default App;
