import axios from 'axios'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'


function Dashboard_main() {

  const [data,setdata]= useState([])
  const navigate = useNavigate()
  

  useEffect(()=>{
    axios.get('http://localhost:3000/Cards')
    .then(res => setdata(res.data))
    .catch(err => console.log(err))
  })

  const handle_delete = ((id)=>{
    axios.delete(`http://localhost:3000/Cards/${id}`)
    .then(res => {
      navigate('/dashboard')
    })
    .catch(err => console.log(err))
  })
  
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>list of products</h1>
      <div className='w-75 rounded bg-white border shadow p-4 '>
        <div className='d-flex justify-content-end'>
          <Link to='/newcard' className='btn btn-success'>Add +</Link>

        </div>
        <table className='table table-stipend'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((card,i)=>(
                <tr key={i}>
                  <td>{card.id}</td>
                  <td>{card.title}</td>
                  <td>{card.description}</td>
                  <td>{card.price}</td>
                  <td>
                    <Link to={`/edit/${card.id}`}><button className='btn btn-sm btn-primary me-2'>Edit</button></Link>
                    <button className='btn btn-sm btn-danger me-2' onClick={e => handle_delete(card.id)}>Delete</button>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
         

      </div>
     </div>

    </>
  )
}

export default Dashboard_main

