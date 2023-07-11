import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'
const SignUp = () => {
  
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img className='
        hidden sm:block absolute object-cover w-full h-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/3ebc957d-26ce-41ff-97ab-dfd68ffdf31f/IQ-en-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg
        " alt="Background" />
        <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

        <div className='fixed px-4 py-24 z-[50] w-full'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75
            text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='font-bold text-2xl '>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e)=> setEmail(e.target.value)} value={email}
                  className='p-3 my-2 rounded-md bg-gray-700 outline-none ' type="email" placeholder='Email' autoComplete='email' />
                <input onChange={(e)=> setPassword(e.target.value)} value={password}
                  className='p-3 my-2 rounded-md bg-gray-700 outline-none ' type="password" placeholder='Password' autoComplete='current-password' />
                <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-500'>Sign Up</button>
                <div className='flex justify-between items-center text-gray-600 text-sm '>
                  <p><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Need help?</p>
                </div>
                <p className='py-6'><span className='text-gray-600 '>Already subscribed to NETFLIX ?</span>
                  <Link className='ml-1' to='/login'>
                  Sign In
                  </Link>
                </p>
                </form>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp