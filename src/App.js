import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import {Footer, Nav, SideNav }from './component/import';
import { useData } from './context/context';
import {Doc,Home} from './page/import';


function App() {
  const {sideNav,setSideNav}=useData()
  return (
    <>
    <Router>
    {
      sideNav?<SideNav/>:""
    }
      {/* <Nav/> */}
    <Nav />
      <div onClick={()=>setSideNav(false)}>
        <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/doc/*' element={<Doc/>}></Route>
        </Routes>
    <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;

