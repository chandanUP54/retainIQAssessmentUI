
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/table' element={<Table />}/>
      </Routes>
    </div>
  );
}

export default App;
