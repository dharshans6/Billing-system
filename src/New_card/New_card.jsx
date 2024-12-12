import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function New_card() {
  const [values,setvalues]=useState({
    title:'',
    description:'',
    price:'',
    image:''

  })
  const navigate =useNavigate()
  const handlesubmit= (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/Cards',values)
    .then(res => {
        console.log(res)
        navigate('/Dashboard')
        
    })
    .catch(err => console.log(err))
  }
  return (
    <>
     <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a New user</h1>
            <form onSubmit={handlesubmit}>
                <div className='mb-2'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='title' className='form-control' placeholder='enter the title' 
                    onChange={e =>setvalues({...values,title:e.target.value})}/>
                </div>
                
                <div className='mb-2'>
                    <label htmlFor="name">Description</label>
                    <input type="text" name='title' className='form-control' placeholder='enter the Description'
                    onChange={e =>setvalues({...values,description:e.target.value})} />
                </div>
                
                <div className='mb-2'>
                    <label htmlFor="name">price</label>
                    <input type='number' name='title' className='form-control' placeholder='enter the price' 
                    onChange={e =>setvalues({...values,price:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="name">Image</label>
                    <input type='file' name='title' className='form-control' placeholder='choose a file' 
                    />
                </div>
                <button className='btn btn-success'>submit</button>
                <Link to='/Dashboard' className='btn btn-primary ms-3'>Back</Link>   
            </form>
        </div>
     </div>
    </>
  )
}

export default New_card