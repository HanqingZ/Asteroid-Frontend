import axios from "../index"

export const getHistory = async () => {
  try{
    const response = await axios.get("/history")
        return response.data
  } catch (err) {
    console.error(`Can't get miner list, ${err}`);
  }
}

export const getHistoryOfMiner = async ({minerId}) => {
  try{
    const response = await axios.get(`/history?minerId=${minerId}`)
    return response.data
  } catch (err) {
    console.error(err);
  }
}

export const getOneHistory = async ({historyId}) => {
  try{
    const response = await axios.get(`/history/${historyId}`)
    return response.data
  } catch (err) {
    console.error(err);
  }
}

export const updateHistory = async ({historyId}) => {
  try{
    const response = await axios.put(`/history/${historyId}`, {
      capacity: { current: 0, max: 173 },
      speed: { travel: 14, mining: 174 },
      position: { x: 583, y: 590 },
      year: 263,
      planet: "635a04c181af06f7b2543e4c",
      status: 2,
      miner: "635a04c181af06f7b2543e6b"
    })
    return response.data
  } catch (err) {
    console.error(err);
  }
}

export const deleteHistory = async ({historyId}) => {
  try{
    const response = await axios.delete(`/history/${historyId}`)
    return response.data
  } catch (err) {
    console.error(err);
  }
}
