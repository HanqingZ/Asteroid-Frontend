import axios from "../index"

export const getAsteroid = async () => {
  try{
    const response = await axios.get("/asteroids")
    
    return response.data
  } catch (err) {
    console.log(err);
  }
}
