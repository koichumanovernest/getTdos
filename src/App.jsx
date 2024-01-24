import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [userId, setUserId] = useState(1)
  const  getTotad = async () =>{
    try{
      const  response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
      const responsData = await response.json()
      console.log(responsData);
    }catch(err){
      console.error("bacand ypal",err);
    }
  };
  useEffect(()=>{
    getTotad()
  },[userId])



  return (
    <div>
      <input 
      type="text"
    value={userId} onChange={(e) => setUserId(e.target.value)}/>
    </div>
  )
}

export default App