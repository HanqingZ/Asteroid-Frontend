import axios from "../index"

export const getMiner = async () => {
  try{
    const response = await axios.get("/miners")
        return response.data
  } catch (err) {
    console.error(`Can't get miner list, ${err}`);
  }
}

export const getMinerByPlanet = async ({planetId}) => {
  try{
    const response = await axios.get(`/miners?planetId=${planetId}`)
    return response.data
  } catch (err) {
    console.log(err);
  }
}

export const getOneMiner = async ({minerId}) => {
  try{
    const response = await axios.get(`/miners/${minerId}`)
    return response.data
  } catch (err) {
    console.log(err);
  }
}

export const createMiner = async (minerInfo) => {
  try{
    const response = await axios.post("/miners", minerInfo)
    return response.data
  } catch (err) {
    console.error(err);
  }
}
