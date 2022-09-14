import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import "../css/post.css"
import { Avatar } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import Haha from "../img/haha.svg"
import Wow from "../img/wow.svg"
import likeColor from "../img/likecolor.svg"
import Love from "../img/love.svg"
import LikeRegular from "../img/like-regular.png"
import Comment from "../img/comment.png"
import Share from "../img/share.png"

import avatarSticker from "../img/avatar-sticker.png"
import HappyEmoji from "../img/happy-emoji.png"
import Camera from "../img/camera.png"
import Sticker from "../img/sticker.png"
import Gif from "../img/gif.png"
// import Angrry from "../img/angry.svg"
// import Care from "../img/care.svg"
// import Sad from "../img/sad.svg"

const Post = ({photoURL,image,username,times,message}) => {
    return (
        <div className='post'>
            <div className='post_top'>
                <div className='post_topLeft'>
                {
                    photoURL ? <img className='avatar' src={photoURL} /> : <Avatar/>
                }
                    <div className='postInfo'>
                        <h4>{username}</h4>
                        <p>{times}<PublicIcon/></p>
                    </div>
                </div>
                <MoreHorizIcon/>
            </div>

            <div className='post_middle'>
                <p>{message}</p>  
                {
                    image && <img src={image} />
                }
            </div>
            <div className='showReact-share'>
                <div className='showReact-shareLeft'>
                    <img src={Love} alt=""/>
                    <img src={Haha} alt=""/>
                    <img src={likeColor} alt=""/>
                    <img src={Wow} alt=""/>
                    <span style={{marginLeft:'10px'}}>4</span>
                </div>
                <div className='showReact-shareRight'>
                    <span style={{marginRight:'10px'}}>2</span>
                    <span>Comments</span>
                </div>

            </div>
            <div className='post_option'>
                <div className='postBottom_option'>
                <div className='post_bottomOption'>
                    <img src={LikeRegular} alt=""/>
                    <p>Like</p>
                    </div>
                    <div className='post_bottomOption'>
                        <img src={Comment} alt=""/>
                        <p>Comment</p>
                    </div>
                    <div className='post_bottomOption'>
                        <img src={Share} alt=""/>
                        <p>Share</p>
                    </div>
                </div>
            </div>
            <div className='post_comments_box child_avatar'>
                
                <div className='post_comments'>
                <Avatar/>
                <form>
                    <input type="text" placeholder="Write a comment..." />
                    <img className='comment_icon' src={avatarSticker} alt="" />
                    <img className='comment_icon' src={HappyEmoji} alt="" />
                    <img className='comment_icon' src={Camera} alt="" />
                    <img className='comment_icon' src={Gif} alt="" />
                    <img className='comment_icon' src={Sticker} alt="" />
                </form>
                </div>
                <div className='AllCommentShow'>
                    <Avatar src={photoURL}/>
                    <div className="comments_info">
                        <h4>User Name</h4>
                        <p>Very Nice Post</p>
                    </div>
                    <MoreHorizOutlinedIcon className='comment_moreIcon'/>
                </div>
                <div className='comment_reply'>
                        <p>Like</p>
                        <p>Reply</p>
                        <p>Share</p>
                        <p style={{color:'#020202c7',fontWeight:'normal'}}>1</p>
                        <span style={{color:'#020202c7',fontWeight:'normal'}}>h</span>
                    </div>
            </div>
        </div>
    );
};

export default Post;