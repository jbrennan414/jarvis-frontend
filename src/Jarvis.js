import './App.css';
import React, { useState, useEffect } from 'react';
import Battery80Icon from '@mui/icons-material/Battery80';
import CircularProgress from '@mui/material/CircularProgress';
import Delete from '@mui/icons-material/Delete';


function Jarvis() {

    const [roombaState, setRoombaRequest] = useState({
        batteryPct: 0,
        binIsFull: false,
        currentState: "",
        loading: true
      });

    useEffect(() => {
        fetch(`http://localhost:3001/status`)
            .then(response => response.json())
            .then(data => setRoombaRequest({
                batteryPct: data["mission"]["batPct"],
                binIsFull: data["mission"]["bin"]["full"],
                currentState: data.mission.cleanMissionStatus.phase,
                loading: false
            }))
    })

    const { batteryPct, 
            binIsFull, 
            currentState, 
            loading } = roombaState;

    return (
      <div className="jarvis">
          <h3>Jarvis</h3>
            {loading ?
            <div>
                <CircularProgress color='inherit'/> 
            </div>
            : 
            <div>
                <div className='attributeRow'>
                    <Battery80Icon />
                    <h5>{batteryPct}%</h5>
                </div>

                {binIsFull && <div className='attributeRow garbageRow'>
                    <Delete />
                    <h3>Bin full</h3>
                    </div> }
                    
                    
            <h4>Current state: {currentState}</h4> 
            {/* charge // run //stuck */}
        </div>}
      </div>
    );
}
  
export default Jarvis;
