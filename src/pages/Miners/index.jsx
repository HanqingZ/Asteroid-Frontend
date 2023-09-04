import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import { getMiner } from "../../server/api/miner"
import './index.scss';
import { getPlanet } from "../../server/api/planet";
import { minerStatus } from "../../constants/status";
import RowButton from '../../components/RowButton'
import Popup from "../../components/Popup";
import HistoryList from "../../components/HistoryList";

const Miners = () => {

  const [minerInfo, setMinerInfo] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [selectMiner, setSelectMiner] = useState()

  const handleShowPopup = (miner) => {
    setShowPopup(true)
    setSelectMiner(miner)
  }

  const minerTableColoums = [
    {field: 'name', headerName: 'Name', width: 100, renderCell:(params) => <RowButton onClick={() => handleShowPopup(params.row)} className="showHistoryButton" name={params.row.name} /> },
    {field: 'planet', headerName: 'Planet', width: 100},
    {field: 'carryCapacity', headerName: 'carryCapacity', width: 100},
    {field: 'travelSpeed', headerName: 'travelSpeed', width: 100},
    {field: 'position', headerName: 'Position', width: 100},
    {field: 'status', headerName: 'Status', width: 100}
  ]

  useEffect(() => {
    getPlanet().then(response => {
      getMiner().then(res => {
        res.forEach(element => {
          element.position = `${element.x},${element.y}`
          element.id = element._id
          element.status = minerStatus[element.status]
          element.planet = response.filter(ele => ele._id === element.planet)[0]?.name
        });
        setMinerInfo(res)
      })
    })
  }, [])

  return (
    <div>
      <DataGrid
        style={{color: "#9499C3", border: "none", borderColor: "#9499C3"}}
        rows={minerInfo}
        columns={minerTableColoums}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
      {showPopup &&
        <Popup setShowPopup={setShowPopup} >
          <HistoryList selectMiner={selectMiner} />
        </Popup>
      }
    </div>
  )
}

export default Miners
