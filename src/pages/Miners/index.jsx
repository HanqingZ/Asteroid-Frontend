import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import { getMiner } from "../../server/api/miner"
import './index.scss';

const Miners = () => {

  const [minerInfo, setMinerInfo] = useState([])
  const minerTableColoums = [
    {field: 'name', headerName: 'Name', width: 70},
    {field: 'planet', headerName: 'Planet', width: 70},
    {field: 'carryCapacity', headerName: 'carryCapacity', width: 70},
    {field: 'travelSpeed', headerName: 'travelSpeed', width: 70},
    {field: 'position', headerName: 'Position', width: 70},
    {field: 'status', headerName: 'Status', width: 70}
  ]

  useEffect(() => {
    getMiner().then(res => {
      res.forEach(element => {
        element.position = `${element.x},${element.y}`
        element.id = element._id
      });
      setMinerInfo(res)
    })
  }, [])
  
  console.log(minerInfo);

  return (
    <div>
      <DataGrid
        style={{color: "#9499C3"}}
        rows={minerInfo}
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

export default Miners
