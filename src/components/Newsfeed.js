import React, { Component } from 'react';
import '../styles/newsfeed.css'
import Post from './Post';
import Share from './Share';
import {Posts} from '../testData(mustErase)';

class Newsfeed extends Component {
state ={
    
}

    render() {
        return (
            <div className="feed">
                <div className='feedWrapper'>
                    <Share />
                    {Posts.map( singlePost => (
                        <Post key={singlePost.id} post={singlePost}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Newsfeed;