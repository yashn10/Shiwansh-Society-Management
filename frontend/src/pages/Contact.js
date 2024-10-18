import React, { useState } from 'react'
import axios from 'axios';

function Country() {

  const [data, setdata] = useState({ name: "" });
  const [message, setMessage] = useState("");


  const handleinput = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/country', data);

      if (response) {
        setMessage(response.data.message);
      } else {
        setMessage('An error occurred');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('An error occurred');
    }

  }


  return (
    <>

      <h1 className='text-center m-5'>Manage Country</h1>

      <form className='w-25 m-auto' method='post'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
          <input type="text" className="form-control" id="exampleInputEmail1" onChange={handleinput} value={data.name} name='name' />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
      </form>

      {message && <p className='text-center mt-3' style={{ "color": "red", "fontSize": "20px" }}>{message}</p>}

    </>
  )
}

export default Country