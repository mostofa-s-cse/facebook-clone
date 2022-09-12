import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import RightSidebar from "./components/RightSidebar";
function App() {
  return (
    <>
     <Header/>
     <div className="app_body">
      <Sidebar/>
      <Feed/>
      <RightSidebar/>
     </div>
     {/* App Body */}
     {/* Sidebar */}
     {/* Post */}
     {/* RightSidebar */}
    </>
  );
}

export default App;
