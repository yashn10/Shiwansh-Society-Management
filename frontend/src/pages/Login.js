import React from 'react'

function Login() {
    return (

        <div className='container border w-25'>
            <h1 className='text-center'>Facebook Login</h1>

            <form className=''>
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

    )
}

export default Login