import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './header.css';
import { Avatar, IconButton } from '@material-ui/core';
import {useStateValue} from '../../stateProvider'

export default function Header(){
    const [{ user },dispatch] = useStateValue();

    return(
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
            </div>
            <div className="header_input">
                <SearchIcon/>
                <input placeholder="Search Facebook" type="text" name="" id=""/>
            </div>
            <div className="header_center">
                <div className="header__icon active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <StoreOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            <div className="header_right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
    )

}