import React from 'react';

export default function ({ src, width = 500, height = 350 }) {
	return (
		<div
			className="Image"
			style={{
				width: `${width}px`,
				height: `${height}px`,
				backgroundImage: `url(${src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				borderRadius: '.5rem',
			}}
		></div>
	);
}
