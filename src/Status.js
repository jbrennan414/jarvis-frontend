import './App.css';
import { useState, useEffect } from 'react';

function Status(props) {

  function getStatus() {
    fetch(`http://10.0.0.50:3001/status`)
      .then(response => response.json())
      .then(data => {
        console.log("DATA", data)
        setStatus(data.mission.cleanMissionStatus.phase) 
        setBatteryPct(`${data.mission.batPct}%`)
        if (data.mission.bin.full){
          setBin("full")
        } else {
          setBin("empty")
        }
        props.isUIDisabled("connected")

      })
      .catch(error => console.log(error))
  }

    //on appear, fetch jarvis' status
    const [status, setStatus] = useState("pending")
    const [batteryPct, setBatteryPct] = useState("pending")
    const [binStatus, setBin] = useState("pending")
    
    useEffect(() => {
        getStatus()
    }, [])

  return (
    <div className="status-bar">
        <div className="status-items">
          <h6>Status: {status}</h6>
          <h6>Battery: {batteryPct}</h6>
          <h6>Bin Status: {binStatus}</h6>
        </div>
    </div>
  );
}


export default Status;
