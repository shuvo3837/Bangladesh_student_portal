import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="navbar bg-base-200 shadow-md px-4">

      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="flex items-center">
          <img
            src="https://i.ibb.co.com/gM5Yd30N/logo.png"
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
        </Link>
      </div>

      {/* Menu Items */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-medium">

          <li><Link to="/">Home</Link></li>

          {/* Features Dropdown */}
          <li tabIndex={0} className="dropdown dropdown-hover">
            <span className="flex items-center cursor-pointer">
              Features
              <svg className="fill-current ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </span>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48 mt-1"
            >
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/scholarships">Scholarships</Link></li>
              <li><Link to="/jobs">Job Opportunities</Link></li>
            </ul>
          </li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Right Side Buttons */}
      <div className="flex-none ml-3">
        {isLoggedIn ? (
          <Link to="/profile" className="btn btn-primary btn-sm">
            Profile
          </Link>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
