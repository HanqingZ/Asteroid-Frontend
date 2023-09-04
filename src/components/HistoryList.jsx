import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { minerStatus } from "../constants/status";
import { getPlanet } from "../server/api/planet";
import { getHistoryOfMiner } from "../server/api/history"
import './CreateMiner.scss'

const reachLimit = (amount, max) => {
  return parseInt(amount) >= parseInt(max)
}

const HistoryList = ({ selectMiner }) => {

  const {name, _id} = selectMiner;
  const [minerInfo, setMinerInfo] = useState({})

  const minerTableColoums = [
    {field: 'updatedAt', headerName: 'Date', width: 100},
    {field: 'year', headerName: 'Year', width: 100},
    {field: 'planet', headerName: 'Planet', width: 100},
    {field: 'carryCapacity', headerName: 'carryCapacity', width: 100,
      renderCell:(params) =>
        <div className={reachLimit(params.row.capacity.current, params.row.capacity.max) ? "green": ""}>
          {`${params.row.capacity.current}/${params.row.capacity.max}`}
        </div> },
    {field: 'travelSpeed', headerName: 'travelSpeed', width: 100},
    {field: 'position', headerName: 'Position', width: 100},
    {field: 'status', headerName: 'Status', width: 100}
  ]

  useEffect(() => {
    getPlanet().then(response => {
      getHistoryOfMiner(_id).then(res => {
        res.forEach(element => {
          element.position = `${element.position.x},${element.position.y}`
          element.carryCapacity = `${element.capacity.current}/${element.capacity.max}`
          element.travelSpeed = `${element.speed.travel}/${element.speed.mining}`
          element.id = element._id
          element.status = minerStatus[element.status]
          element.planet = response.filter(ele => ele._id === element.planet)[0]?.name
        });
        setMinerInfo(res)
      })
    })
  }, [])
  

  return (
    <>
      <h2>{`History of ${name}`}</h2>
      <DataGrid
        style={{color: "#9499C3", border: "none"}}
        rows={minerInfo}
        columns={minerTableColoums}
      />
    </>
  )
}

export default HistoryList
