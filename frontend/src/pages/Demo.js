import React from 'react'

const Demo = () => {
    return (

        <div className='container'>

            <div className='row mt-5'>
                <div className='col-lg-4 col-md-4 col-sm-12 px-5'>
                    <form>
                        <div className='row'>
                            <h3 className='text-center'>Login to facebook</h3>
                        </div>
                        <div className='row mb-3'>
                            Email: <input type='email' placeholder='enter your email' className='form-control' />
                        </div>
                        <div className='row mb-3'>
                            Password: <input type='password' placeholder='enter your password' className='form-control' />
                        </div>
                        <div className='row mb-3'>
                            Password: <input type='password' placeholder='enter your password' className='form-control' />
                        </div>
                        <div className='row mb-3'>
                            Password: <input type='password' placeholder='enter your password' className='form-control' />
                        </div>
                        <div className='row mb-3'>
                            <button type='button' className='btn btn-primary'>Login</button>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <a className='btn-primary'>Forgot your account?</a>
                            </div>
                            <div className='col'>
                                <a className='btn-primary'>Create new account</a>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='col-lg-8 col-md-8 col-sm-12 px-5'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}

export default Demo