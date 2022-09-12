import React from 'react';
import "../css/feed.css"
import MassageSender from './MassageSender';
import StoryReel from './StoryReel';
const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MassageSender/>
        </div>
    );
};

export default Feed;