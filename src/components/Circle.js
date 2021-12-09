import React from 'react';

const Circle = (props) => {

    return (
        <>
        {/* "url(" + { Background } + ")" */}
        <div className="member">
            <div className={`circle ${props.name}`}>
                {props.id}
                {/* <Image style={props.pic} source={{uri: `${props.pic}`}} /> */}
            </div>
            <div>
            <h2>{props.id}</h2>
                <h2>{props.name}</h2>
                <p>{props.job}</p>
                <a href={`https://github.com/${props.github}`}>Github Account</a>
                {/* <img src={pic1} alt={props.name}/> */}
            </div>
        </div>
        </>
    );
};

export default Circle;