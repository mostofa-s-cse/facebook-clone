import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import RightSidebar from "./components/RightSidebar";
// import Login from "./components/RequireAuth/Login";
// import SignUp from "./components/RequireAuth/SignUp";
function App() {
  // const user = null;
  return (
    <>
    {/* {
      !user ? (<Login/>) : (
        <SignUp/>
      )
    } */}
     <Header/>
     <div className="app_body">
      <Sidebar/>
      <Feed/>
      <RightSidebar/>
      {/* <Login/>
      <SignUp/> */}
     </div>
    </>
  );
}

export default App;
