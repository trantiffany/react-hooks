import "./App.css";
import { useTrees } from "./";
import { useFetch } from "./useFetch";

function App({login}) {
  const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`)
  
  const { trees } = useTrees();
  console.log(data)
  if (loading) return <h1>loading...</h1>
  if (error) return (
    <pre>{JSON.stringify(error, null, 2)}</pre>
  );

  return (
    <div>
      <h1>
        Trees I've heard of
      </h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
      <div>
    </div>
    <div>
      <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data.avatar_url}/>
      <h1>{data.name}</h1>
      </div>
    </div>
    </div>
  );
}

export default App;
