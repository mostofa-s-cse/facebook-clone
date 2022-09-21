import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed"
import RightSidebar from "./RightSidebar";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Login from './RequireAuth/Login';
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            {
                    ! user ? (<Login/>) : (
                        <div className="fullBody">
                        <Header/>
                        <div className="app_body">
                        <Sidebar/>
                        <Feed/>
                        <RightSidebar/>
                        </div>
                        </div>
                      )
                      }
        </>
    );
};

export default Home;