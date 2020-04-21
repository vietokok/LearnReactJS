- Bad

```javascript
demo(){
    this.setState({
        value: this.state.value + 1
    });
}
```

- Good

```javascript
demo(){
    this.setState(state => {
        return {
            value: state.value + 1
        }
    });
}
```
