import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import Navbar from '../common-components/Navbar';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => { 
    auth.onAuthStateChanged(async (user) => {
        console.log(user);
        setUserDetails(user) // user details by google
        const docRef = doc(db, "Users", user.uid);
        const docFind = await getDoc(docRef);
        if(docFind.exists()) {
            setUserDetails(docFind.data())
            console.log(docFind.data());
        } else {
            // console.log("User is not logged in")
        }
    });
  };

  useEffect(() => {
    fetchUserData();
  },[]);

  const handleLogout = async() => {
    try {
      await auth.signOut();
      window.location.href = "/login"
      console.log("user logged out successfully!!")
      toast.error("Logout Successfully")
    } catch(error) {
      console.error(error.message)
    }
  }

  return (
    <>
    <Navbar />
      <div className='flex justify-center items-center h-screen'>
       {userDetails ? (
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'> Welcome {userDetails.fullName || userDetails.displayName}</h3>
          <div className='my-5 font-normal text-gray-700 dark:text-gray-400'>
            <p>Full Name: {userDetails.fullName || userDetails.displayName}</p>
            <p>Email: {userDetails.email}</p>
          </div>
          <button 
            type="button" 
            onClick={handleLogout}
            className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2  "
            >
            Logout
          </button>
        </div>
      ) : (
        <p className="flex justify-center items-center h-screen text-xl">Loading...</p>
        
      )}
       </div>
    </>
  );
 
};

export default Profile;