import React, { useState } from "react";
import axios from 'axios';
const AddSociety = () => {
    const[data, setdata]=useState({SocityName:"", NoOfHouse:"", Address:"", city:"", pincode:"" });
    const handlechange=(e)=>{
     setdata({...data, [e.target.name]: e.target.value})
    }
    const submit = async(e)=>{
      e.preventDefault();
    
      try{ 
        const response = await axios.post("http://localhost:8000/create",data);
        if(response.status === 201){ 
          window.alert(response.data.message);
        }else{
          window.alert(response.data.error);
        }
    
      } catch(error){
        console.error("Error logging in:",error);
        window.alert("error occurs");
      }
    }
    
      return (
        <>
          <div className="row m-3">
            <div className="col-3">
              <h1>space for all button</h1>
            </div>
            <div className="col-9">
              <div className="container justify-center" style={{ height: "100vh" }}>
                <div className="border border-primary  h-75 ">
                  <div className="text-white border border-success bg-success mb-3 h-10">
                    <h2 className="mt-3 text-center">ADD NEW SOCIETY</h2>
                  </div>
    
                  <form className="container text-center">
                    <div className="mb-2 ">
                      Society name : <input type="text" id="societyname"name="SocityName"onChange={handlechange} value={data.SocityName} />
                    </div>
    
                    <div className="mb-2">
                      No of house : <input type="number" id="NoOfHouses"name="NoOfHouse" onChange={handlechange}value={data.NoOfHouse}/>
                    </div>
    
                    <div className="mb-2">
                      Address : <input type="text" id="address" name="Address" onChange={handlechange}value={data.Address} />
                    </div>
    
                    <div className="mb-2">
                      City : <input type="text" id="city" name="city"onChange={handlechange}value={data.city}  />
                    </div>
    
                    <div className="mb-2">
                      Pin code : <input type="text" id="pincode"name="pincode"onChange={handlechange} value={data.pincode}/>
                    </div>
    
                     <div className="mb-2">
                      <button type="submit" class="btn btn-success" onClick={submit}>ADD Society</button>
                        
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default AddSociety
