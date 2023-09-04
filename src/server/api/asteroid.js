import axios from "../index"

export const getAsteroid = async () => {
  try{
    const response = await axios.get("/asteroids")
    return response.data
  } catch (err) {
    console.error(err);
  }
}

export const getOneAsteroid = async ({asteroidId}) => {
  try{
    const response = await axios.get(`/asteroids/${asteroidId}`)
    return response.data
  } catch (err) {
    console.error(err);
  }
}

export const createAsteroid = async () => {
  try{
    const response = await axios.post("/asteroids", {
      position: { x: 889, y: 298 },
      name: "Space rock 9",
      minerals: 918,
      status: 1
    })
    return response.data
  } catch (err) {
    console.error(err);
  }
}

export const updateAsteroid = async ({asteroidId}) => {
  try{
    const response = await axios.put(`/asteroids/${asteroidId}`, {
      name: "Space rock 9",
      position: { x: 890, y: 230 },
      minerals: 907,
      status: 1
  })
    return response.data
  } catch (err) {
    console.error(err);
  }
}

export const deleteAsteroid = async ({asteroidId}) => {
  try{
    const response = await axios.delete(`/asteroids/${asteroidId}`)
    return response.data
  } catch (err) {
    console.error(err);
  }
}
