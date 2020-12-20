import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import './sidebar.css'
import SideBarRow from './sidebarrow/sideBarRow'
import { useStateValue } from '../../stateProvider';

function Sidebar() {
    const [{user},dispatch]= useStateValue();
    return (
        <div className="sidebar">
            <SideBarRow src={user.photoURL} title={user.displayName}/>
            <SideBarRow Icon={LocalHospitalIcon} title='Covid-19 Info page'/>
            <SideBarRow Icon={PeopleIcon} title='Friends'/>
            <SideBarRow Icon={ChatBubbleIcon} title='Chat'/>
        </div>
    )
}

export default Sidebar
