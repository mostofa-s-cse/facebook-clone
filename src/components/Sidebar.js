import React from 'react';
import '../css/sidebar.css';
import SidebarOptons from './SidebarOptons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, Divider } from '@mui/material';
import SidebarBottomOption from './SidebarBottomOption';
const Sidebar = () => {
    return (
        <>
        <div className='sidebar'>
            <div className='sidebar_top'>
                <SidebarOptons Icon={Avatar}  title="User Name"/>
                <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"  title="Find friends"/>
                <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Groups"/>
                <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" title="Pages"/>
                <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" title="Marketplace"/>
                <SidebarOptons src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch"/>
                <SidebarOptons className="down" Icon={ArrowDropDownIcon} title="See more"/>
                <Divider/>
            </div>
            <div className='sidebar_bottom'>
                <div className='sidebarBottomRowHeader'>
                <h4>Your shortcuts</h4>
                <button className='btn'>Edit</button>
                </div>
            <SidebarBottomOption src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/240736330_219768496771261_1990116849516232314_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE11Wc3Qc74PbI360q-694W_BtHIyP3sW_8G0cjI_exb2md9fShnfqmECBRK_1KjBHfQSY81TLEcFsNq8P6BQ-0&_nc_ohc=TPss9cK7NswAX8d8uX7&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_s6ZMnkWLp2o_sbh47ikkuFuBXkMZwwL023Hf0d3Lvrw&oe=63261536"  title="Code Master Pro"/>
            <SidebarBottomOption src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"  title="Find friends"/>
            <SidebarBottomOption  className="down" Icon={ArrowDropDownIcon} title="See more"/>
            </div>
        </div>
        
        </>
    );
};

export default Sidebar;