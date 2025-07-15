import "../App.css";
import BackgroundDesign from "../components/BackgroundDesign";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="container">
      <h1>Settings</h1>
      <BackgroundDesign />
      <div className="auto-start-container">
        <p>Automatic start with system boot</p>
        <input type="checkbox" id="auto-start-ckbox" />
      </div>
      <div className="auto-start-scan-container">
        <p>Scan new devices automatically</p>
        <input type="checkbox" id="auto-start-scbox" />
      </div>
    </div>
  )
}