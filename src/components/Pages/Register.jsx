import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='card shadow-2xl shrink-0 flex flex-col justify-center items-center min-h-screen  max-h- max-w-max'>
            <h1 className='font-bold text-xl mt-2'>Register your account</h1>
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label ">Name</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label font-bold text-lg">Image URL </label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label font-bold text-lg">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label font-bold text-lg">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>Already Have An Account ? <Link className='text-red-500' to={'/auth/login'}>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;