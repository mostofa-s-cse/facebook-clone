import React from 'react';
import { Avatar, Icon } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import "../css/story.css";
const StoryReel = () => {
    return (
        <div className='storyReel'>
           <div className='ourStory'>
                <div className='storyImg'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hquZ0Rc1LTmH5YPLGDmdf1ZchGTgNL8rsA&usqp=CAU" alt="Avatar"/>
                </div>
                <AddIcon/>
                <h4>Create Story</h4> 
                <div className="overly">
                </div>
            </div>
            <div className='allStoryShow'>
                <div className='allStory'>
                    <div className='allStoryImg'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hquZ0Rc1LTmH5YPLGDmdf1ZchGTgNL8rsA&usqp=CAU" alt="Avatar"/>
                    </div>
                    <Avatar/>
                    <h4>User Name</h4>
                    <div className="overly">
                    </div>
                </div>
                <div className='allStory'>
                    <div className='allStoryImg'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hquZ0Rc1LTmH5YPLGDmdf1ZchGTgNL8rsA&usqp=CAU" alt="Avatar"/>
                    </div>
                    <Avatar/>
                    <h4>User Name</h4>
                    <div className="overly">
                    </div>
                </div>
                <div className='allStory'>
                    <div className='allStoryImg'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hquZ0Rc1LTmH5YPLGDmdf1ZchGTgNL8rsA&usqp=CAU" alt="Avatar"/>
                    </div>
                    <Avatar/>
                    <h4>User Name</h4>
                    <div className="overly">
                    </div>
                </div>
                <div className='allStory'>
                    <div className='allStoryImg'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hquZ0Rc1LTmH5YPLGDmdf1ZchGTgNL8rsA&usqp=CAU" alt="Avatar"/>
                    </div>
                    <Avatar/>
                    <h4>mohammad mostofa</h4>
                        
                    <div className="overly">
                    </div>
                </div>
                <span className='storyArrow'>
                <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><g fill-rule="nonzero"><path d="M101.751 211.001a1 1 0 0 0 1.415 1.415l5.208-5.209a1 1 0 0 0 0-1.414l-5.208-5.209A1 1 0 0 0 101.75 202l4.501 4.501-4.5 4.501z" transform="translate(355 153.5)"></path><path d="M94.334 207.5h12.812a1 1 0 1 0 0-2H94.333a1 1 0 1 0 0 2z" transform="translate(355 153.5)"></path></g></g></svg>
                </span>
            </div>
        </div>
    );
};

export default StoryReel;