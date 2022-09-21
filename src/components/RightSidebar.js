import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "../css/rightSidebar.css"
import Notification from "../img/notification.png"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Promot from "../img/promot.png"
import { Avatar, IconButton } from '@mui/material';
const RightSidebar = () => {
    return (
        <div className='widget child_avatar'>
            <div className='widget_header'>
                <h4>Your Pages and profiles</h4>
                <MoreHorizIcon/>
            </div>
            <div className='widget_body'>
                <div className='widget_bodyOptions'>
                    <Avatar className="avatar_child" src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/240736330_219768496771261_1990116849516232314_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE11Wc3Qc74PbI360q-694W_BtHIyP3sW_8G0cjI_exb2md9fShnfqmECBRK_1KjBHfQSY81TLEcFsNq8P6BQ-0&_nc_ohc=TPss9cK7NswAX8d8uX7&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_s6ZMnkWLp2o_sbh47ikkuFuBXkMZwwL023Hf0d3Lvrw&oe=63261536"/>
                    <h4>Code Master Pro</h4>
                </div>
                <div className='widget_bodyOptions ml'>
                    <img src={Notification} alt=""/>
                    <p><span>8</span> Notifications</p> 
                </div>
                <div className='widget_bodyOptions ml'>
                    <img src={Promot} alt=""/>
                    <p>Create Promotion</p>
                </div>
            </div>
            <div className='widget_contactHeader'>
                <div className='widget_contactLeft'>
                    <h4>Contact</h4>
                </div>
                <div className='widget_contactRight'>
                <VideoCallIcon/>
                <SearchIcon/>
                <MoreHorizIcon/>
                </div>
            </div>
            <div className='widget_contactBody'>
                <div className='widget_bodyOptions'>
                    <Avatar className='avatar_child' src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/240736330_219768496771261_1990116849516232314_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE11Wc3Qc74PbI360q-694W_BtHIyP3sW_8G0cjI_exb2md9fShnfqmECBRK_1KjBHfQSY81TLEcFsNq8P6BQ-0&_nc_ohc=TPss9cK7NswAX8d8uX7&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_s6ZMnkWLp2o_sbh47ikkuFuBXkMZwwL023Hf0d3Lvrw&oe=63261536"/>
                    <h4>Code Master Pro</h4>
                </div>
                <div className='widget_bodyOptions'>
                    <Avatar className='avatar_child' src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/240736330_219768496771261_1990116849516232314_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE11Wc3Qc74PbI360q-694W_BtHIyP3sW_8G0cjI_exb2md9fShnfqmECBRK_1KjBHfQSY81TLEcFsNq8P6BQ-0&_nc_ohc=TPss9cK7NswAX8d8uX7&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_s6ZMnkWLp2o_sbh47ikkuFuBXkMZwwL023Hf0d3Lvrw&oe=63261536"/>
                    <h4>Code Master Pro</h4>
                </div>
                <div className='widget_bodyOptions'>
                    <Avatar className='avatar_child' src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/240736330_219768496771261_1990116849516232314_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE11Wc3Qc74PbI360q-694W_BtHIyP3sW_8G0cjI_exb2md9fShnfqmECBRK_1KjBHfQSY81TLEcFsNq8P6BQ-0&_nc_ohc=TPss9cK7NswAX8d8uX7&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_s6ZMnkWLp2o_sbh47ikkuFuBXkMZwwL023Hf0d3Lvrw&oe=63261536"/>
                    <h4>Code Master Pro</h4>
                </div>
            </div>

            <div className='widget_bottom'>
                <div className='widget_bottom_header'>
                    <h4>Group conversations</h4>
                </div>
                <div className='widget_bodyOptions'>
                    <Avatar className='avatar_child' src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/240736330_219768496771261_1990116849516232314_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE11Wc3Qc74PbI360q-694W_BtHIyP3sW_8G0cjI_exb2md9fShnfqmECBRK_1KjBHfQSY81TLEcFsNq8P6BQ-0&_nc_ohc=TPss9cK7NswAX8d8uX7&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_s6ZMnkWLp2o_sbh47ikkuFuBXkMZwwL023Hf0d3Lvrw&oe=63261536"/>
                    <h4>Code Master Pro Group</h4>
                </div>
                <div className='widget_bodyOptions'>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <p>Create New Group</p>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;