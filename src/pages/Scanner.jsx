import "../App.css";
import BackgroundDesign from "../components/BackgroundDesign";
import "./Scanner.css";
import { AiOutlineLoading } from "react-icons/ai";
import { IoSkullSharp } from "react-icons/io5";

export default function Scanner() {
  return (
    <div className="container">
      <BackgroundDesign />
      <h1>Scanner</h1>
      <h2>Scan devices for risk classification</h2>

      {/* First Container */}
      <div className="scan-container">
        <button className="scan-button">Select device</button>
      </div>

      {/* Second Container */}
      {/* <div className="scanning-container">
        <h3>Scanning</h3>
        <h4>99% <AiOutlineLoading id="loading-icon"/></h4>
      </div> */}

      {/* Third Container */}
      {/* <div className="result-container">
        <h3>Scan completed!</h3>
        <h4>Risk classification for Device 1</h4>
        <h5><IoSkullSharp className="risk-icon" id="risk1-icon"/><IoSkullSharp className="risk-icon" id="risk2-icon"/><IoSkullSharp className="risk-icon" id="risk3-icon"/></h5>
      </div> */}
    </div>
  )
}