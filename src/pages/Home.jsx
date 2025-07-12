import "../App.css";
import "./Home.css";
import HomeButton from "../components/HomeButton";
import { RiUDiskFill } from "react-icons/ri";
import { IoIosSettings, IoMdSearch } from "react-icons/io";
import { LuScanSearch } from "react-icons/lu";
import BackgroundDesign from "../components/BackgroundDesign";

export default function Home() {
  return (
    <div className="container">
      <BackgroundDesign />
      <h1>USB Protector</h1>
      <h2>by<a href="https://github.com/dangerose777" target="_blank">Dangerose</a></h2>
      <div className="navigate-buttons">
        <HomeButton icon={RiUDiskFill} text="Devices" route="/devices" id="button-devices"/>
        <HomeButton icon={LuScanSearch} text="Scanner" route="/scanner" id="button-scanner"/>
        <HomeButton icon={IoIosSettings} text="Settings" route="/settings" id="button-settings"/>
      </div>
    </div>
  )
}