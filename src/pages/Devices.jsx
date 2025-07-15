import "../App.css";
import BackgroundDesign from "../components/BackgroundDesign";
import "./Devices.css";
import { BsDeviceHddFill, BsUsbDriveFill } from "react-icons/bs";


export default function Devices() {
  return (
    <div className="container">
      <h1>Devices</h1>
      <BackgroundDesign />
      <div className="devices-container">
        <p><BsDeviceHddFill /> DEVICE 1</p>
        <p><BsDeviceHddFill /> DEVICE 2</p>
        <p><BsUsbDriveFill /> DEVICE 3</p>
        <p><BsUsbDriveFill /> DEVICE 4</p>
        <p><BsUsbDriveFill /> DEVICE 5</p>
      </div>
    </div>
  )
}