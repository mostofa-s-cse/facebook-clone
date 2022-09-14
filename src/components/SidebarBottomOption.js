import { Avatar, Icon } from '@mui/material';
import React from 'react';

const SidebarBottomOption = ({src,Icon,title}) => {
    return (
        <>
        <div className='sidebarBottomRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
        </>
    );
};

export default SidebarBottomOption;