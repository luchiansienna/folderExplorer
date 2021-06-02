import { Entity } from '../models/index'
import data from './data'

function getEntities() : Entity[] {
    // Here it should be an axios API call to fetch data
    // return new Promise<Entity[]>((resolve, reject) => {
    //     resolve(entities)
    //     //if the API fails call reject
    // })
    return data
  }
    
// eslint-disable-next-line import/no-anonymous-default-export
export default { getEntities }