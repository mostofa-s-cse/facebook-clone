import Home from "./components/Home";
import Login from "./components/RequireAuth/Login";
import "./css/responsive.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import SignUp from "./components/RequireAuth/SignUp";
function App() {
  const [user] = useAuthState(auth);
  return (
    <>
     <Router>  
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
