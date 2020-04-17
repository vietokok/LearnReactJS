### Example

```javascript
function App() {
return (
	<div className="App">
		<TrafficLight>
		Abc
           	</TraficLight>
	</div>
);
}
```

- 'TrafficLight' is a component
- Abc is a props children of 'TrafficLight'

```javascript
function TrafficLight() {
	const { children } = this.props;
	return (
	// something
	);
}
```

- `const { children } = this.props` use destructuring to take props children
