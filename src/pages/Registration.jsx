import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db, googleProvider } from '../Components/firebase';
import { doc, setDoc } from "firebase/firestore"
import { toast } from 'react-toastify';
import Navbar from '../common-components/Navbar';

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Name", name)

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: name,
        })
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", { position: 'top-center' })
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, { position: 'bottom-center' })
    }
  };


  function handleGoogleSignIn() {
    signInWithPopup(auth, googleProvider).then(async (result) => {
      console.log(result)
      if (result.user) {
        toast.success('User signed in successfully')
        window.location.href = '/profile'
      }
    })
  }



  return (
    <>
      <Navbar buttonTwoPath={'/login'} buttonTwoValue={"LogIn"} />
      <div className="font-[sans-serif] bg-gray-50 flex items-center min-h-screen p-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white grid md:grid-cols-2 gap-8 sm:p-6 p-4 shadow-md rounded-md overflow-hidden">
            <div className="py-10 grid items-end">
              <div className="mb-8">
                <img
                  src="https://m.media-amazon.com/images/G/01/sell/navigation/logos/amazon-in-half-logo.svg"
                  alt="logo"
                  className="mx-auto max-w-xs"
                />
              </div>

              <div className="space-y-6">
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="w-full px-5 py-2.5 flex items-center justify-center rounded-md text-gray-800 text-base tracking-wider font-semibold border-none outline-none bg-gray-100 hover:bg-blue-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    fill="#fff"
                    className="inline shrink-0 mr-4"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fbbd00"
                      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    />
                    <path
                      fill="#0f9d58"
                      d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    />
                    <path
                      fill="#31aa52"
                      d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    />
                    <path
                      fill="#3c79e6"
                      d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    />
                    <path
                      fill="#cf2d48"
                      d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    />
                    <path
                      fill="#eb4132"
                      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-8">
                <h3 className="text-blue-500 text-2xl font-bold">Register</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Name</label>
                  <div className="relative flex items-center">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      type="text"
                      required
                      className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                  <div className="relative flex items-center">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      type="email"
                      required
                      className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      type="password"
                      required
                      className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
                  />
                  <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                    I accept the{" "}
                    <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
                >
                  Create Account
                </button>
              </div>
              <p className="text-gray-800 text-sm mt-6 text-center">
                Already have an account?
                <Link to={'/login'} className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Registration;
