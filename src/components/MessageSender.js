import { Avatar, Modal } from '@mui/material';
import React, { useState } from 'react';
import CreateRoom from '../img/CreateRoom.png';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PeopleIcon from '@mui/icons-material/People';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../css/messageSender.css"
import SATP from "../img/SATP.png"
import Video from "../img/video.png"
import Photo from "../img/photo.png"
import AvatarUser from "../img/userAvatar.png"
import HappyEmojiColor from "../img/happyEmoji-color.png"
import Location from "../img/location.png"
import Flag from "../img/flag.png"
import HappyEmoji from "../img/happy-emoji.png"
import { IconButton } from '@material-ui/core';

const MessageSender = () => {
    const[open, setOpen] = useState(false)
    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
    return (
        <>
        <Modal open={open}>
                <div className='createPost_modal_popup' >
                    <form>
                        <div className='createPost_modal_heading'>
                            <h3>Create Post</h3>
                            <IconButton onClick={handleClose}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                            <hr/>
                        <div className='createPost_modal_header'>
                            <Avatar/>
                            <div>
                                <h5>User Name</h5>
                                <div className='postUserInfo'>
                                    <PeopleIcon/>
                                    <p>Friend</p>
                                    <ArrowDropDownIcon/>
                                </div>
                            </div>
                        </div>
                        <div className='createPost_modal_body'>
                            <textarea rows="5" placeholder="what's on your mind User ?"></textarea>
                            <div className='createPost_modal_bodyIcon'>
                                <img style={{width:'30px'}} src={SATP} alt=""/>
                                <img style={{width:'23px',height:'23px'}} src={HappyEmoji} alt=""/>
                            </div>
                        </div>
                        <div className='createPost_modal_footer'>
                            <div className='createPost_modal_footerLeft'>
                                <h4>Add to your post</h4>
                            </div>
                            <div className='createPost_modal_footerRight'>
                               <img src={Photo} alt=""/>
                               <img src={AvatarUser} alt=""/>
                               <img src={HappyEmojiColor} alt=""/>
                               <img src={Location} alt=""/>
                               <img src={Flag} alt=""/>
                               <MoreHorizIcon/>
                            </div>
                        </div>
                        <input type="submit" className="createPost_modal_submit" value="Post"/>
                    </form>
                </div>
        </Modal>

        <div className='massageSender'>
            <div className='massageSender_top'>
                <Avatar/>
                <form>
                    <input type="text" placeholder="What's on your mind User Name?" onClick={handleOpen} />
                </form>
            </div>
            <div className='massageSender_bottom'>
                <div className='massageSender_option'>
                    <img src={Video} alt=""/>
                    <p>Live Video</p>
                </div>
                <div className='massageSender_option'>
                    <img src={Photo} alt=""/>
                    <p>Photo/Video</p>
                </div>
                <div className='massageSender_option'>
                    <img src={HappyEmojiColor} alt=""/>
                    <p>Feeling/activity</p>
                </div>
            </div>
            
        </div>
        <div className='createRoom'>
                <div className='createRoom_icon'>
                <img className="crtVideoIcon" src={CreateRoom} alt=""/>
                <p>Create Room</p>
                </div>
                <Avatar className="createRoomAvater"/>
                <Avatar className="createRoomAvater"/>
                <Avatar className="createRoomAvater"/>
            </div>
        </>
    );
};

export default MessageSender;