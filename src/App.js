import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Home />
      </Sidebar>
    </div>
  );
}

export default App;
