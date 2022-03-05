import './App.css';
import React, { useState, useEffect } from 'react';
import Battery80Icon from '@mui/icons-material/Battery80';
import CircularProgress from '@mui/material/CircularProgress';
import Delete from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import { Button } from '@mui/material';

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
            <div className='batteryIndicator'>
                <Battery80Icon sx={{ alignItems:'flex-start' }}/>
                <p className='batteryValue'>{batteryPct}%</p>
            </div>

            <h3>Jarvis</h3>

            {loading ?
                <div>
                    <CircularProgress color='inherit'/> 
                </div>
                : 
                <div>        
                    {binIsFull && <div className='attributeRow garbageRow'>
                        <Delete />
                        <h5>Bin full</h5>
                        </div> }

                    {true && <div className='attributeRow stuckRow'>
                        <ErrorIcon />
                        <h5> Stuck!</h5>
                        </div> }

                    {true && <div>
                        <button className='actionButton'>
                            Foo
                        </button>
                        </div>
                    }
                </div>
            }            
                    
            {/* charge // run //stuck */}
        </div>
    );
}
  
export default Jarvis;
