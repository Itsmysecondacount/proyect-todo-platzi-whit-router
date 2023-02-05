import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

export const PageNotFound = () => {
	const navigate = useNavigate();

	const returnHome = () => {
		navigate('/');
	};

	return (
		<div className="error-page">
			<FaRegSadTear size={'200px'} />
			<h1>404</h1>
			<h2>Error, we could not find web page</h2>
			<button onClick={returnHome}>Return to HomePage</button>
		</div>
	);
};
