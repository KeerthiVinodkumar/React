import { useEffect, useState } from "react"
import { Menu_API } from "./contants"
const useReataurantMenu=(resID)=>{
 
     const [resinfo,setresinfo]= useState(null)
      useEffect(()=>{
           fetchMenu()
      })

      const fetchMenu= async()=>{
        const data  = fetch(Menu_API+resID)
        const json = data.json()
        setresinfo(json.data)
        }
      return resinfo
 
}
export default useReataurantMenu