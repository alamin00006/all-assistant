
import { useEffect, useState } from "react"


const useDivision = () =>{

    const [divisions,setDivision]=useState([]);
    useEffect(() => {
        fetch("bd-division.json")
          .then((res) => {res.json()
          console.log(res);
          })
          .then((data) => setDivision(data))
          .catch((error)=>{
           // console.log(error)
            })
      }, []);
    
     return[divisions]
        
      
  
}
export default  useDivision;