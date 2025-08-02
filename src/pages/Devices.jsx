import "../App.css";
import BackgroundDesign from "../components/BackgroundDesign";
import "./Devices.css";
import { BsUsbDriveFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

export default function Devices() {
  const [usbDevices, setUsbDevices] = useState([]);

  useEffect(() => {
    let intervalId;
    async function fetchUsbDevices() {
      try {
        const result = await invoke("list_usb_devices");
        const parsed = JSON.parse(result);
        setUsbDevices(parsed);
      } catch (error) {
        console.error("USB fetch error:", error);
      }
    }
    fetchUsbDevices();
    intervalId = setInterval(fetchUsbDevices, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1>Devices</h1>
      <h2>Select device for scan</h2>
      <BackgroundDesign />
      <div className="devices-container">
        {usbDevices.map((device, index) => (
          <p key={index}><BsUsbDriveFill /> {device.DeviceID} {device.VolumeName}</p>
        ))}
      </div>
    </div>
  )
}