import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Components/firebase';
import { toast } from 'react-toastify';
import Navbar from '../common-components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password)
      window.location.href = " /profile"
      toast.success("Logged In  Successfully!!", { position: 'top-center' })
      console.log("Logged In Successfully!!")
    } catch (error) {
      console.log(error.message)
    }
  };



  return (
    <>
      <Navbar buttonTwoPath={'/signup'} buttonTwoValue={"SignUp"} />

      <div className="bg-white font-[sans-serif] min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full border p-8 rounded-md bg-gray-200">
          <div className="text-center">
            <img src="https://m.media-amazon.com/images/G/01/sell/navigation/logos/amazon-in-half-logo.svg" alt="logo" />
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-4">
            <div className="relative flex items-center">
              <input onChange={(e) => setEmail(e.target.value)} name="email" type="text" required className="w-full text-sm text-gray-800 bg-white border-2 border-transparent focus:border-[#1E2772] px-4 py-3 rounded-md outline-none" placeholder="Enter email" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
              </svg>
            </div>

            <div className="relative flex items-center">
              <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" required className="w-full text-sm text-gray-800 bg-white border-2 border-transparent focus:border-[#1E2772] px-4 py-3 rounded-md outline-none" placeholder="Enter password" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 !mt-4">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-transparent rounded-md" />
                <label for="remember-me" className="ml-3 block text-sm text-gray-800">
                  Remember me
                </label>
              </div>
              <div>
                <a href="jajvascript:void(0);" className="text-sm font-semibold text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="!mt-12">
              <button onClick={handleSubmit} type="button" className="w-full py-2.5 px-4 text-base font-semibold rounded-md text-white bg-blue-500 hover:bg-[#344760] focus:outline-none">
                Log in
              </button>
              <p className="text-sm mt-6 text-center text-gray-800">Don't have an account
                <Link to={'/signup'}>
                  <a href="javascript:void(0);" className="text-blue-500 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
