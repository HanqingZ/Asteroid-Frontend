import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import { getPlanet } from "../../server/api/planet"
import './index.scss';

const Planets = () => {

  const [planetInfo, setPlanetInfo] = useState([])
  const minerTableColoums = [
    {field: 'name', headerName: 'Name', width: 180},
    {field: 'miners', headerName: 'Miners', width: 180},
    {field: 'minerals', headerName: 'Minerals', width: 180},
    {field: 'buttons', headerName: '', width: 70}
  ]

  useEffect(() => {
    getPlanet().then(res => {
      res.forEach(element => {
        element.id = element._id
        element.minerals = `${element.minerals}/1000`
        if(element.minerals >= 1000){
          element.buttons = 'Create a miner'
        }
      });
      setPlanetInfo(res)
    })
  }, [])
  
  console.log(planetInfo);

  return (
    <div>
      <DataGrid
        style={{color: "#9499C3"}}
        rows={planetInfo}
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

export default Planets
