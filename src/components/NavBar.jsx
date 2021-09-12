import React from 'react';

import { NavHashLink } from 'react-router-hash-link';

const scrollWithOffset = (el, offSet = 0) => {
	const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
	const yOffset = offSet;
	window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

export const NavBar = () => {
	return (
		<nav className="sticky">
			<ul>
				<NavHashLink
					activeClassName="link_active"
					className="link"
					to="/home/#home"
					scroll={(el) => scrollWithOffset(el)}
				>
					Home
				</NavHashLink>

				<NavHashLink
					activeClassName="link_active"
					className="link"
					to="/blog"
					scroll={(el) => scrollWithOffset(el)}
				>
					Blog
				</NavHashLink>

				<NavHashLink
					activeClassName="link_active"
					className="link"
					to="/home/#section-1"
					scroll={(el) => scrollWithOffset(el, -45)}
				>
					Link 1
				</NavHashLink>

				<NavHashLink
					activeClassName="link_active"
					className="link"
					to="/home/#section-2"
					scroll={(el) => scrollWithOffset(el, -45)}
				>
					Link 2
				</NavHashLink>

				<NavHashLink
					activeClassName="link_active"
					className="link"
					to="/home/#section-3"
					scroll={(el) => scrollWithOffset(el, -45)}
				>
					Link 3
				</NavHashLink>

				<NavHashLink
					activeClassName="link_active"
					className="link"
					to="/home/#section-4"
					scroll={(el) => scrollWithOffset(el, -45)}
				>
					Link 4
				</NavHashLink>
			</ul>
		</nav>
	);
};
