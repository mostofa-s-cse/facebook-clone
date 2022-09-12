import React from 'react';
import '../css/sidebar.css';
import SidebarOptons from './SidebarOptons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from '@mui/material';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarOptons Icon={Avatar}  title="User Name"/>
            <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeEX-j3l-DEv-t4T2rLmiGMuqfpKmA4GtxSp-kqYDga3FOgiE36j2sLh8JrYiumvpi-RirCMhkVL1-DQ3Z60lxf6"  title="Find friends"/>
            <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeE8pTd2wdeOUGsWZR5ohZkHZ3xAUM5_bWpnfEBQzn9tarE_P8nyd95wKqwSTsRKLRk8LCtC4p-dnXxRQF85z_ig" title="Groups"/>
            <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeG0llen2tKgzTACtseeEdvxtEPFOzh_t-u0Q8U7OH-36xN_oS3iMV-uMMiyu8947dFcgSf93cRtXG6v9qjTDB3k" title="Pages"/>
            <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeGxn9fDtPfPjysUvZGURLT7-vsl1K9A-9v6-yXUr0D72xsk8ytwNohCc1g77mPnki3vxuymLNh6nf37a1NASB0J" title="Marketplace"/>
            <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeGjR7V7tqnpkG96MqCSmGrR2NRDTXGHJ53Y1ENNcYcnnftqxJgvDoMabOSJfTMmbGG86A9XPVamIBLM0GJiomb6" title="Watch"/>
            <SidebarOptons className="down" Icon={ArrowDropDownIcon} title="See more"/>
        </div>
    );
};

export default Sidebar;