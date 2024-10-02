import React, { useState, useEffect } from 'react'
import axios from 'axios';

function District() {

  const [data, setdata] = useState({ name: "", state: "", country: "" });
  const [countries, setcountries] = useState([]);
  const [states, setstates] = useState([]);
  const [message, setMessage] = useState("");


  const handleinput = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/district', data);
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

  const fetchCountries = async () => {
    try {
      const getcountry = await axios.get('http://localhost:5000/country');
      if (getcountry.data) {
        setcountries(getcountry.data);
      } else {
        setMessage('Failed to load countries');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('An error occurred');
    }
  }

  const fetchStates = async () => {
    try {
      const getstate = await axios.get('http://localhost:5000/state');
      if (getstate.data) {
        setstates(getstate.data);
      } else {
        setMessage('Failed to load states');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('An error occurred');
    }
  }

  useEffect(() => {
    fetchCountries();
    fetchStates();
  }, [])


  return (
    <>

      <h1 className='text-center m-5'>Manage District</h1>

      <form className='w-25 m-auto' method='post'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">District</label>
          <input type="text" className="form-control" id="exampleInputEmail1" onChange={handleinput} value={data.name} name='name' />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">State</label>
          <select className="form-control" id="exampleInputCountry" onChange={handleinput} value={data.state} name='state'>
            <option value="" disabled>Select your state</option>
            {states.map((state) => (
              <option key={state.id} value={state.name}>{state.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Country</label>
          <select className="form-control" id="exampleInputCountry" onChange={handleinput} value={data.country} name='country'>
            <option value="" disabled>Select your country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>{country.name}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
      </form>

      {message && <p className='text-center mt-3' style={{ "color": "red", "fontSize": "20px" }}>{message}</p>}

    </>
  )
}

export default District