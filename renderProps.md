# Render Props

## Example 1

```javascript
// A Component name is 'Demo'
// data is a object, render is a function
import React from 'react';

export default function ({ data, render }) {
	return <div>{data.map(render)}</div>;
}
```

```javascript
// Index
import React from 'react';
import './App.css';
import Demo from './components/Demo';

const data = ['A', 'B', 'C'];

export default function App(){
  return(
    <div className="App">
      <Demo data={data} render={(item) => <div>{item}</div>} />
    >/div>
  );
}
```

## Example 2

```javascript
import React from 'react';

export default class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.setState({
				count: this.state.count + 1,
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return <div>{this.props.children(this.state)}</div>;
	}
}
```

```javascript
// Index
import React from 'react';
import './App.css';
import Counter from './components/Counter';

export default function App(){
  return(
    <div className="App">
      <Counter>
        {({ count }) => <h1>{count}</h1>}
      </Counter>
    >/div>
  );
}
```
