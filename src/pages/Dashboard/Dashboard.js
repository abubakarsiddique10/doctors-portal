import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile container">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard/review'>Review</Link></li>
                    <li><Link to='/dashboard/myhistory'>MyHistory</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>AllUsers</Link></li>
                        <li><Link to='/dashboard/addDoctor'>AddDoctor</Link></li>
                        <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>

                    </>}
                </ul>
            </div>
        </div>
    )
}
export default Dashboard;