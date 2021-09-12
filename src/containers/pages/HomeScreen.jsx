import React, { useState } from 'react';

import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Wrapper } from '../../containers/blog.wrapper';

import logo from '../../logo.svg';

export const HomeScreen = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<NavBar />

			<header className="App-header" id="home">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<p>
					<button
						type="button"
						onClick={() => setCount((count) => count + 1)}
					>
						count is: {count}
					</button>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					{' | '}
					<a
						className="App-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>

			<Wrapper bgColor="pri" value="1" />

			<Wrapper bgColor="sec" value="2" />

			<Wrapper bgColor="pri" value="3" />

			<Wrapper bgColor="sec" value="4" />

			<Footer />
		</div>
	);
};
