import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import States from "./components/States";
import "./index.css"
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <States />
    </div>
  );
}

export default App;
