class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    const valueLabel = React.createElement('h1', null, `Value: ${this.state.counter}`);
    const minusButton = React.createElement('button', {
      onClick: () => this.setState((state) => (
        { counter: state.counter - 1 }
      )),
    }, 'DOWN');
    const plusButton = React.createElement('button', {
      onClick: () => this.setState((state) => (
        { counter: state.counter + 1 }
      )),
    }, 'UP');

    return React.createElement('div', null, valueLabel, minusButton, plusButton);
  }
}

const rootDOMElement = document.getElementById('root');
const counterElement = React.createElement(Counter, null);
ReactDOM.render(counterElement, rootDOMElement);
