import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
const Login = () => {
  // Sign In and Sign Up change logic
  const [isSignInForm, setIsSignForm] = useState(false);
  const [errormessage,setErrorMessage]= useState(null);
 
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const handleButtonClick = () =>{
    console.log(name);
    console.log(email);
    const message = isSignInForm ? checkValidData(email.current.value, password.current.value):checkValidData(name.current?.value, email.current.value, password.current.value);
    setErrorMessage(message);
  }
  // change the sign up to sign in form 
  const toggleSignInForm = ()=>{
     setIsSignForm(!isSignInForm );
  }

  return (
    <>
       <Header />
      <div className='absolute' >
      <img 
      src= "https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg" 
      alt="logo" />
      </div>
      <form 
      onSubmit={(e)=>{e.preventDefault();}}
      className='className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up" }
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-20"
          />
        )}
      <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-20"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-20"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errormessage}</p>
      <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}   
        >  
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
    
         <p className="py-4 cursor-pointer"
          onClick={toggleSignInForm}
            >
              {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
            </p>
            
      </form>

    </>
  )
}

export default Login;