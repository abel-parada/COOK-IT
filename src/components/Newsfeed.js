import React, { Component } from 'react';

import '../styles/newsfeed.css'
import Post from './Post';
import Share from './Share';

class Newsfeed extends Component {
state ={
    
}

    render() {
        return (
            <div className="feed">
                <div className='feedWrapper'>
                    <Share />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        );
    }
}

export default Newsfeed;

// import React, { Component } from 'react';

// import '../styles/newsfeed.css'

// class Newsfeed extends Component {
// state ={
    
// }

//     render() {
//         return (
//             <div className="newsfeedcard">
//                 <div className="cardhead">
//                     <h1>Profile Image</h1>
//                     <p>Time</p>
//                     <p>Text/recipe</p>
//                 </div>
//                 <div className="newspic">
//                     <p>Picture</p>
//                 </div>
//                 <div className="comment">
//                     Write a comment
//                 </div>
//             </div>
//         );
//     }
// }

// export default Newsfeed;