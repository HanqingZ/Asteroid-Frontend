import axios from "../index"

export const getPlanet = async () => {
  try{
    const response = await axios.get("/planets")
    
    return response.data
  } catch (err) {
    console.log(err);
  }
}
