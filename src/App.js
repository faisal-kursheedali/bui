import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Home,Doc} from './page/import';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/doc' exact element={<Doc/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
