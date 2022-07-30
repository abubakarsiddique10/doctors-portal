import { Route, Routes } from "react-router-dom";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Header from "./pages/Shared/Header";
import RequireAuth from "./pages/Shared/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyReview from "./pages/Dashboard/MyReview";
import MyHistory from "./pages/Dashboard/MyHistory";
import Users from "./pages/Dashboard/Users";
import RequireAdmin from "./pages/Shared/RequireAdmin";
import AddDoctor from "./pages/Dashboard/AddDoctor";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";
import Payment from "./pages/Dashboard/Payment";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="myhistory" element={<MyHistory />}></Route>
          <Route path="payment/:id" element={<Payment />} />
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctors" element={<ManageDoctors></ManageDoctors>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
