import React from 'react';
import { NavBar } from '../../components/NavBar';

const scrollTop = () => {
	window.scrollTo({ top: 0 });
};
0;
export const BlogScreen = () => {
	{
		scrollTop();
	}
	return (
		<div className="blog">
			<NavBar />
			<h1>Saludos desde tu Blog</h1>
		</div>
	);
};
