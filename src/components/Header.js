import React from 'react';
import Nav from './Nav';

const Header = () => {
	return (
		<header>
			<div className="container"> 
			<h1>Cook IT</h1>
			<Nav />
			</div>
		</header>
	);
};

export default Header;