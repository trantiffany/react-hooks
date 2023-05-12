import "./App.css";
import { useInput } from "./useInput";

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#FFFFFF");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}> 
      <input {...titleProps} type="text" placeholder="Title..." />
      <input {...colorProps} type="color" />
      <button>Add</button>
    </form>
  );
}

export default App;
