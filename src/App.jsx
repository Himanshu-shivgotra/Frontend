
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import { ToastContainer } from "react-toastify"
import Profile from "./Components/Profile"
import { auth } from "./Components/firebase"
import { useEffect, useState } from "react"
import ItemStore from "./pages/ItemStore"
import PaymentSuccess from "./pages/PaymentSuccess"
import OrderTracking from "./pages/OrderTracking.jsx"



function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })

  }, []);

  return (<>
    <Routes>
      <Route path="/" element={user ? <Navigate to="/profile" /> : <Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/store" element={<ItemStore />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path="/track-order" element={<OrderTracking />} />

    </Routes>
    <ToastContainer />
  </>
  )
}

export default App
