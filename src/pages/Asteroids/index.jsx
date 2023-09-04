import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import { getAsteroid } from "../../server/api/asteroid"
import './index.scss';
import { getMiner } from "../../server/api/miner";

const reachMinLimit = (amount, min) => {
  return parseInt(amount) <= parseInt(min)
}

const Asteroids = () => {

  const [asteroidInfo, setAsteroidInfo] = useState([])
  const minerTableColoums = [
    {field: 'name', headerName: 'Name', width: 180},
    {field: 'minerals', headerName: 'Minerals', width: 180,
      renderCell: (params) => <div className={reachMinLimit(params.row.minerals, 0) ? "orange" : ""}>{`${params.row.minerals}/1000`}</div>},
    {field: 'currentMiner', headerName: 'Current Miner', width: 180},
    {field: 'position', headerName: 'Position', width: 70}
  ]

  useEffect(() => {
    getMiner().then(response => {
      getAsteroid().then(res => {
        res.forEach(element => {
          element.id = element._id
          element.currentMiner = response.filter(ele => ele._id === element.currentMiner)[0]?.name
          element.position = `${element.position.x},${element.position.y}`
        });
        setAsteroidInfo(res)
      })
    })
  }, [])
  
  return (
    <div>
      <DataGrid
        style={{color: "#9499C3", border: "none", borderColor: "#9499C3"}}
        rows={asteroidInfo}
        columns={minerTableColoums}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
    </div>
  )
}

export default Asteroids
