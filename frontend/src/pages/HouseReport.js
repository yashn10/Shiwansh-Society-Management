import React from 'react'

function HouseReport() {
  return (
    <>
    <div className="row m-3">
      <div className="col-3">
        <h1>space for all button</h1>
      </div>
      <div className="col-9">
        <div className="container" style={{ height: "100vh" }}>
          <div className="border border-primary  h-75 ">
            <div className="text-white border border-success bg-success mb-3 h-10">
              <h2 className="mt-3 text-center">HOUSE REPORT</h2>
            </div>
            <div className="mb-5 text-center">

           Select Society :  <select class="form w-25 border-success">
           <option value="1">select</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
           </select>
           </div>
           <div className="mb-2 text-center">
                  <input
                    class="btn btn-success "
                    type="submit"
                    value="VIEW"
                  ></input>
                  </div>
           
            
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default HouseReport;
