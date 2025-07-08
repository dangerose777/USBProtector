import "./Navbar.css";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { RiUDiskFill } from "react-icons/ri";
import { IoIosSettings, IoMdSearch } from "react-icons/io";
import { LuScanSearch } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="buttons">
        <Link to="/" className="button"><FaHome /></Link>
        <Link to="/devices" className="button"><RiUDiskFill /></Link>
        <Link to="/scanner" className="button"><LuScanSearch /></Link>
        <Link to="/settings" className="button"><IoIosSettings /></Link>
      </div>
    </div>
  );
}