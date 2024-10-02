import React from 'react'

function Facebook() {
    return (

        <>

            <div className='container'>
                <h1 className='text-center'>Facebook Signup</h1>

                <form>
                    <div className='row'>
                        <h3 className='text-center'>Employee Registration Form</h3>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            First Name: <input type='text' className='form-control' />
                        </div>
                        <div className='col'>
                            Last Name: <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            Date: <input type='date' className='form-control' />
                        </div>
                        <div className='col'>
                            Month: <input type='text' className='form-control' />
                        </div>
                        <div className='col'>
                            Year: <input type='number' className='form-control' />
                        </div>
                    </div>
                    <div className='row'>
                        Address: <textarea type='text' placeholder='enter your address' className='form-control' />
                    </div>
                    <div className='row'>
                        <div className='col-6 d-flex m-auto'>
                            City: <input type='text' placeholder='enter your city' className='form-control' />
                        </div>
                    </div>
                    <div className='row text-center'>
                        <div className='col'>
                            <button type='button' className='btn btn-success'>Add</button>
                        </div>
                        <div className='col'>
                            <button type='button' className='btn btn-primary'>Update</button>
                        </div>
                        <div className='col'>
                            <button type='button' className='btn btn-danger'>Reset</button>
                        </div>
                    </div>
                </form>
            </div>


            <div className='row'>
                <div className='col-4'></div>
                <div className='col-8'></div>
            </div>

        </>

    )
}

export default Facebook