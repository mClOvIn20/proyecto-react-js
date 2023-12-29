import {MOCK_DATA} from "../Mocks/data.js"
 
export const pedirDatos =() => {
    return new Promise ((resolve, reject) => {
      setTimeout (()=> {
        resolve(MOCK_DATA)
      }, )
    })
  }


