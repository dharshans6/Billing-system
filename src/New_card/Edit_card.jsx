// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// function Edit_card() {
//     const [data,setdata] =useState([])
//     const {id}=useParams()
//     useEffect(()=>{
//         axios.get('http://localhost:3000/Cards'+id)
//         .then(res => setdata(res.data))
//         .catch(err => console.log(err))
//     },[])
//   return (
//     <>
//        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
//         <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
//             <h1>Update user</h1>
//             <form >
//                 <div className='mb-2'>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" name='title' className='form-control' placeholder='enter thr title' 
//                     value={data.title}/>
//                 </div>
                
//                 <div className='mb-2'>
//                     <label htmlFor="name">Description</label>
//                     <input type="text" name='title' className='form-control' placeholder='enter thr Description'
//                     value={data.description}/>
//                 </div>
                
//                 <div className='mb-2'>
//                     <label htmlFor="name">price</label>
//                     <input type='number' name='title' className='form-control' placeholder='enter thr price' 
//                     value={data.price}/>
//                 </div>
//                 <button className='btn btn-success'>submit</button>
//                 <Link to='/Dashboard' className='btn btn-primary ms-3'>Back</Link>   
//             </form>
//         </div>
//      </div>
//     </>
//   )
// }

// export default Edit_card


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function Edit_card() {
  const [data, setData] = useState({
    title: '',
    description: '',
    price: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/Cards/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/Cards/${id}`, data)
      .then(res => {
        console.log(res);
        navigate('/Dashboard');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h1>Update Product</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name='title'
                className='form-control'
                placeholder='Enter the title'
                value={data.title}
                onChange={handleChange}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                name='description'
                className='form-control'
                placeholder='Enter the description'
                value={data.description}
                onChange={handleChange}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="price">Price:</label>
              <input
                type='number'
                name='price'
                className='form-control'
                placeholder='Enter the price'
                value={data.price}
                onChange={handleChange}
              />
            </div>
            <button className='btn btn-success'>Submit</button>
            <Link to='/Dashboard' className='btn btn-primary ms-3'>Back</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit_card;
