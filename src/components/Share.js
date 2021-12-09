import React from 'react';
import "./../styles/share.css";
import { VscFileMedia, VscReactions } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";
import { BiTag } from "react-icons/bi";


const Share = () => {
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img className='shareProfileImg' src='/images/Shahriar.jpg' alt='' />
                    <input placeholder='What is cooking?' className='shareInput'/>
                </div>
                <hr className='shareHr' />
                <div className='shareBottom'>
                    <div className='shareOptions'>
                        <div className='shareOption'>
                            <VscFileMedia className='shareIcon' />
                            <span className='shareOptionText'>Photo/Video</span>
                        </div>
                        <div className='shareOption'>
                            <BiTag className='shareIcon' />
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className='shareOption'>
                            <VscReactions className='shareIcon' />
                            <span className='shareOptionText'>Reactions</span>
                        </div>
                        <div className='shareOption'>
                            <GoLocation className='shareIcon' />
                            <span className='shareOptionText'>Location</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;