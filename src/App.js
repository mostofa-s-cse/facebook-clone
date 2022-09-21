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
function App() {
  const [user] = useAuthState(auth);
  return (
    <>
     <Router>  
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
