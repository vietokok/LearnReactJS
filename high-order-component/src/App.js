import React from 'react';
import './App.css';
import Image from './components/Image';
import WithGrayScale from './components/WithGrayScale';

const ImageGrayScale = WithGrayScale(Image, 1);

function App() {
	return (
		<div className="App">
			<ImageGrayScale src="http://dummyimage.com/350x200.bmp/ff4444/ffffff" />
		</div>
	);
}

export default App;
