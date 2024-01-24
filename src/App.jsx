import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [ posts, setPosts ] = useState([])
  console.log(posts);

  const  getTotad = async () =>{
    try{
      const  response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
      const responsData = await response.json()
      setPosts(responsData)
    }catch(err){
      console.error("bacand ypal",err);
    }
  };
  useEffect(()=>{
    getTotad()
  },[])



  return (
    <div>
    {posts.map((item) => (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </div>
    ))}
    </div>
  )
}

export default App