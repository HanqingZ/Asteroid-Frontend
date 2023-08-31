import axios from "../index"

export const getMiner = async () => {
  try{
    const response = await axios.get("/miners")
    
    console.log(response.data);
    return response.data
  } catch (err) {
    console.log(err);
  }
}
