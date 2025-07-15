import "../App.css";
import BackgroundDesign from "../components/BackgroundDesign";
import "./Scanner.css";

export default function Scanner() {
  return (
    <div className="container">
      <BackgroundDesign />
        <h1>Scanner</h1>
        <button className="scan-button">Scan device</button>
    </div>
  )
}