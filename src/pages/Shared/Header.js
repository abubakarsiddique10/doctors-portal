import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
const Header = () => {
    const [user, loading] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    if (loading) {
        return <Loading />
    }

    const manuItems = <>
        <li><Link to='/'>Home</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contuct'>Contuct</Link></li>
        <li><Link to='/about'>About</Link></li>
        {user ?
            <div className="flex items-center">
                <button onClick={logout} className="btn btn-ghost">Sign Up</button>
            </div>
            : <li><Link to='/login'>Login</Link></li>}
        <li><Link className="bg-[#2490eb] text-white px-8 py-3 ml-5 font-medium" to='/appointment'>APPOINTMENT</Link></li>
    </>
    return (
        <header>
            <nav className="container">
                <div className="navbar bg-base-100 px-0 py-3">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                                {manuItems}
                            </ul>
                        </div>
                        <Link to="/" className="text-xl font-bold cursor-pointer">Doctors Portal</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 text-lg">
                            {manuItems}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;