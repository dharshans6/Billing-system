import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home_page from '../Home/Home_page'
import Products_main from '../Products/Products_main'
import Dashboard_main from '../Dashboard/Dashboard_main'
import Contact_main from '../Contact/Contact_main'
import New_card from '../New_card/New_card'
import Edit_card from '../New_card/Edit_card'

function Rounting() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home_page/>}/>
        <Route path='/Products' element={<Products_main/>}/>
        <Route path='/Dashboard' element={<Dashboard_main/>}/>
        <Route path='/contacts' element={<Contact_main/>}/>
        <Route path='/newcard' element={<New_card/>}/>
        <Route path='/edit/:id' element={<Edit_card/>}/>
     </Routes>
    </>
  )
}

export default Rounting