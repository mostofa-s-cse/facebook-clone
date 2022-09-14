import React from 'react';
import "../css/feed.css"
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
           <div className='feedBody'>
                <MessageSender/>
                <Post 
                    photoURL="https://imgs.search.brave.com/N6QN9kvBH2zHNpFvHPlCU50PclPOt2eYd1ek4gbuz3k/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/VGRyVlQ4N1gxdG5R/SldTZEU1VmVRSGFI/YSZwaWQ9QXBp" 
                    image="https://imgs.search.brave.com/rsl7gGzLLlQBFACdy-ADW25Pq2sbVtaJ1mCezhS-p04/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/V1RNaFluMmktUnBD/dHg2TmZOdG9BSGFF/byZwaWQ9QXBp" 
                    username="Nabila Ahmed"
                    times="4m"
                    message="This is facebook clone website...gfgdfgd."
                    />
                <Post 
                    photoURL="" 
                    image="" 
                    username="Nabila Ahmed"
                    times="4m"
                    message="This is facebook clone website...gfgdfgd."
                    />
           </div>
        </div>
    );
};

export default Feed;