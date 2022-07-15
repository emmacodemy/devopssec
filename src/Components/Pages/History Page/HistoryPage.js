import React from 'react'
import SideBar from "../../SideBar"


const HistoryPage = ({cart, details, addItem, changeView}) => {
  return (
    <div>
      <h1>HistoryPage</h1>
      <SideBar cart={cart} details={details} changeView={changeView} addItem={addItem} />
    </div>
    
  )
}

export default HistoryPage