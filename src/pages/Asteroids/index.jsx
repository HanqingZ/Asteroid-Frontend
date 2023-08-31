import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import { getAsteroid } from "../../server/api/asteroid"
import './index.scss';

const Asteroids = () => {

  const [asteroidInfo, setAsteroidInfo] = useState([])
  const minerTableColoums = [
    {field: 'name', headerName: 'Name', width: 180},
    {field: 'minerals', headerName: 'Minerals', width: 180},
    {field: 'currentMiner', headerName: 'Current Miner', width: 180},
    {field: 'position', headerName: 'Position', width: 70}
  ]

  useEffect(() => {
    getAsteroid().then(res => {
      res.forEach(element => {
        element.id = element._id
        element.minerals = `${element.minerals}/1000`
        element.position = `${element.position.x},${element.position.y}`
      });
      setAsteroidInfo(res)
    })
  }, [])
  
  console.log(asteroidInfo);

  return (
    <div>
      <DataGrid
        style={{color: "#9499C3"}}
        rows={asteroidInfo}
        columns={minerTableColoums}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 30 },
          },
        }}
      />
    </div>
  )
}

export default Asteroids
