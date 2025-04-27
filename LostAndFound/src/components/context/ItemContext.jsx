import React from 'react'
import { useContext , createContext }  from 'react';

    const lostItems = [
        {
          id: 1,
          itemName: "Wallet",
          description: "Black leather wallet with some cards and cash",
          location: "Cafeteria",
          lostDate: "2025-04-26",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 2,
          itemName: "Laptop",
          description: "Silver laptop with a sticker on the back",
          location: "Library",
          lostDate: "2025-04-24",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 3,
          itemName: "Backpack",
          description: "Red backpack with a water bottle holder",
          location: "Gym",
          lostDate: "2025-04-25",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 4,
          itemName: "Phone",
          description: "Black iPhone 13 with a cracked screen",
          location: "Parking Lot",
          lostDate: "2025-04-27",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 5,
          itemName: "Book",
          description: "Physics textbook, hardcover, with a blue cover",
          location: "Classroom",
          lostDate: "2025-04-23",
          image: "https://via.placeholder.com/150"
        }
      ];

      const ItemContext = createContext() ;
      const ItemContextProvider = (props) =>{
         return <ItemContext.Provider value={{lostItems}}>{props.children}</ItemContext.Provider>
      }
      
  

export {ItemContext , ItemContextProvider}