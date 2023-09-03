import React, { useEffect, useState } from "react";
import { io } from 'socket.io-client';
import { DataGrid } from '@mui/x-data-grid'
import { getPlanet } from "../../server/api/planet"
import { createMiner } from "../../server/api/miner"
import RowButton from '../../components/RowButton'
import './index.scss';
import CreateMiner from "../../components/CreateMiner";
import Popup from "../../components/Popup";

const hasExtraMiner = (mineralAmount) => {
  return mineralAmount >= 1000
}

const Planets = () => {

  const [planetInfo, setPlanetInfo] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [newMiner, setNewMiner] = useState({
    name: '',
    carryCapacity: '',
    travelSpeed: '',
    miningSpeed: ''
  })
  
  const handleCreate = (planetInfo) => {
    console.log(planetInfo);
    createMiner(planetInfo)
  }

  const handleShowPopup = () => {
    setShowPopup(true)
  }
  
  const minerTableColoums = [
    {field: 'name', headerName: 'Name'},
    {field: 'miners', headerName: 'Miners'},
    {field: 'minerals', headerName: 'Minerals', renderCell: (params) => <div className={hasExtraMiner(params.row.minerals) ? "green" : ""}>{`${params.row.minerals}/1000`}</div>},
    {field: 'buttons', headerName: '', renderCell:(params) => hasExtraMiner(params.row.minerals) && <RowButton onClick={() => handleShowPopup(params.row)} className="createMinerButton" name="Create a miner" children={<img src="/icons/addHex.svg" alt="addHex" />} /> }
  ]

  useEffect(() => {
    getPlanet().then(res => {
      res.forEach(element => {
        element.id = element._id
      });
      setPlanetInfo(res)
    })
  }, [])

  const socket = io('https://asteroids.dev.mediasia.cn/')
  socket.on('connect',() => {
    setInterval(() => {
      console.log('socket connect')
    }, 60 * 1000);
  })  
  
  return (
    <div>
      <DataGrid
        style={{color: "#9499C3", border: "none", borderColor: "#9499C3"}}
        rows={planetInfo}
        columns={minerTableColoums}
      />
      {showPopup &&
        <Popup setShowPopup={setShowPopup} >
          <CreateMiner minerInfo={newMiner} planetInfo={planetInfo} handleSave={handleCreate} />
        </Popup>
      }
    </div>
  )
}

export default Planets
