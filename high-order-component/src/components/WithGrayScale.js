import React from 'react';

export default function (Image, grayscale = 0.5) {
	const percent = grayscale * 100;
	return function (props) {
		return (
			<div
				className="filter"
				style={{
					filter: `grayscale(${percent}%)`,
				}}
			>
				<Image {...props} />
			</div>
		);
	};
}
