import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { createMiner } from '../server/api/miner'
import './CreateMiner.scss'

const CreateMiner = ({ minerInfo, planetInfo, handleSave }) => {

  const {name, carryCapacity, travelSpeed, miningSpeed} = minerInfo;
  const [minerName, setMinerName] = useState(name);
  const [selectPlanet, setSelectedPlanet] = useState(planetInfo[0]);
  const [minerCarryCapacity, setMinerCarryCapacity] = useState(carryCapacity);
  const [minerTravelSpeed, setMinerTravelSpeed] = useState(travelSpeed);
  const [minerMiningSpeed, setMinerMiningSpeed] = useState(miningSpeed);

  const handleSelectPlanet = (ele) => {
    setSelectedPlanet(ele.target.value)
  }

  const handleSaveButton = () => {
    const minerInfo = {
      name: minerName,
      planet: selectPlanet.id,
      x: selectPlanet.position.x,
      y: selectPlanet.position.y,
      angle: selectPlanet?.angle || 0,
      carryCapacity: minerCarryCapacity,
      travelSpeed: minerTravelSpeed,
      miningSpeed: minerMiningSpeed,
      status: 0,
      minerals: 0,
      target: selectPlanet.id,
      targetType: "Planet"
    }
    createMiner(minerInfo)
  }

  return (
    <>
      <h2>Create a miner</h2>
      <p className="inputName">Name</p>
      <input className="inputbox largeInput" value={minerName} onChange={(event) => setMinerName(event.target.value)} />
      <p className="inputName">Planet</p>
      <Select
        value={selectPlanet}
        onChange={handleSelectPlanet}
        className="inputbox largeInput"
        sx={{ color: "white" }}
      >
        {planetInfo.map(ele => 
          <MenuItem key={ele._id} className="inputbox" value={ele}>{ele.name}</MenuItem>
        )}
      </Select>
      <h2>Assign points</h2>
      <div className="assignZone">
        <div className="assignZoneElement">
          <p className="inputName">carryCapacity</p>
          <input className="inputbox smallInput" value={minerCarryCapacity} onChange={(event) => setMinerCarryCapacity(event.target.value)} />
        </div>
        <div>
          <p className="inputName">travelSpeed</p>
          <input className="inputbox smallInput" value={minerTravelSpeed} onChange={(event) => setMinerTravelSpeed(event.target.value)} />
        </div>
        <div>
          <p className="inputName">miningSpeed</p>
          <input className="inputbox smallInput" value={minerMiningSpeed} onChange={(event) => setMinerMiningSpeed(event.target.value)} />
        </div>
      </div>
      <button className="saveButton" onClick={handleSaveButton} >Save</button>
    </>
  )
}

export default CreateMiner
