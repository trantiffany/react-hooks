import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(`https://api.github.com/users`)
    .then(res => res.json())
    .then(setData)
  }, [])

  if(data){
    return(
      <div>
      <ul>
        {data.map((user)=>(
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <button onClick={()=>setData([])}>
          Remove Data
      </button>
      </div>
    )
  }
  return (
      <p>No Users</p>
  );
}

export default App;
