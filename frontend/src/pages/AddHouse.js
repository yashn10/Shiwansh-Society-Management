import React, {useState} from 'react';
import axios from 'axios';

function AddHome() {
                
  const[data,setdata]=useState({SocityNo:"", BlockNo:"", HouseType:"", Details:""})
  const handlechange=(e)=>{
    setdata({...data, [e.target.name]: e.target.value})
   }

  const submit=async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post("http://localhost:8000/NewHouse",data);
      if(response.status === 201){
        window.alert(response.data.message);
      }else{
        window.alert(response.data.error);
      }
    }catch(error){
      console.error("Error logging in:",error);
      window.alert("error occurs");
    }
  }
  return (
    <>
      <div className="row m-3">
        <div className="col-3">
          <h1>Space for all button</h1>
        </div>
        <div className="col-9">
          <div className="container" style={{ height: "100vh" }}>
            <div className="border border-primary  h-75 ">
              <div className="text-white border border-success bg-success mb-3 h-10">
                <h2 className="mt-3 text-center">ADD NEW HOUSE TO SOCIETY</h2>
              </div>

              <form className="container text-center">
                <div className="mb-5">

                  Society :    <select class="form w-25 border-success" name='SocityNo'onChange={handlechange}value={data.SocityNo}>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  </select>
                  </div>

                
                
                <div className="mt-3" >
                  Block No : <input type="number" id="noOfHouses border-success"name='BlockNo' onChange={handlechange} value={data.BlockNo}/>
                </div>

                <div className="mt-4 border-success">
                  House Type :  <select class="form w-25 border-success" name='HouseType'onChange={handlechange}value={data.HouseType}>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  </select>
                  </div>

                <div className="mt-3">
                  Details : <input type="text" id="city" name='Details' onChange={handlechange}value={data.Details}/>
                </div>

                <div className="mt-3 ">
                  <input
                    class="btn btn-success "
                    type="submit"
                    value="ADD House"
                    onClick={submit}
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddHome;
