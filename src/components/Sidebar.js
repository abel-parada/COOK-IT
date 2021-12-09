import React, { Component } from 'react';
import '../styles/sidebar.css'
import { MdOutlineRssFeed } from "react-icons/md";
import { GiSaucepan } from "react-icons/gi";



class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MdOutlineRssFeed className='sidebarIcon' />
                            <span className='sidebarListItemText'>Feed</span>
                        </li>
                        <li className='sidebarListItem'>
                            <GiSaucepan className='sidebarIcon' />
                            <span className='sidebarListItemText'>Recipes</span>
                        </li>
                    </ul>
                    <button className='sidebarButton'>Show more</button>
                    <hr className='sidebarHr'/>
                    <ul className='sidebarFriendList'>
                        <li className='sidebarFriend'>
                            <img className='sidebarFriendImg' src='/images/Shahriar.jpg' alt='' />
                            <span className='sidebarFriendName'>Shahriar Karim</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;