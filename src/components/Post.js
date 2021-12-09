import React from 'react';
import "./../styles/Post.css";
import { BsThreeDotsVertical } from "react-icons/bs";


const Post = ({post}) => {

    console.log(post);

    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className="postProfileImg" src='/Users/bc-macair034/Documents/React locally/Cook it for real/COOK-IT/src/images/Shahriar.jpg' alt='' />
                        <span className='postUserName'>Abel Parada</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src='https://images.food52.com/Xktd5OT0m7RkRTEP3XD8ZFQrCZ4=/1504x1000/filters:format(webp)/519d2a22-0de8-4ef1-8e36-8571c1ea2938--IMG_7191.jpeg' alt='' />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img className='likeIcon' src='https://f0.pngfuel.com/png/822/938/like-sign-png-clip-art.png' alt=''/>
                        <span className='postLikeCounter'>{post.like} like</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Post;