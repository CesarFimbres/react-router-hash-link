import React from 'react';
import { Link } from 'react-router-dom';

export const Error404 = () => {
	return (
		<div className="error404">
			<h1>Error 404</h1>
			<h2>Página no encontrada</h2>
			<hr />
			<h3>Parece que tu enlace no funciona 🙄</h3>
			<p>
				Dejame llevarte de nuevo a nuestra...
				<Link className="btn" to="/home">
					página de inicio
				</Link>
			</p>
		</div>
	);
};
