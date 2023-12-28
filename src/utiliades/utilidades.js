import {MOCK_DATA} from "../Mocks/data"
 
export const pedirDatos =() => {
    return new Promise ((resolve, reject) => {
      setTimeout (()=> {
        resolve(MOCK_DATA)
      }, 2000)
    })
  }
  import  mock_data  from "../mock_data/data.json"

