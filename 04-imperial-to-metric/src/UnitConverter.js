import React from 'react';
import UnitBox from './UnitBox';

class UnitConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mg: 1000,
      mgInputValue: '1000',
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    const unit = event.target.name;
    let stringValue = event.target.value;
    let numberValue;

    if (stringValue === '') {
      this.setState({ mg: NaN, mgInputValue: stringValue });
      return;
    }

    numberValue = Number(stringValue);
    if (Number.isNaN(numberValue)) {
      this.setState({ mg: NaN, mgInputValue: stringValue });
      return;
    }

    switch (unit) {
      case 'kg': {
        const mg = numberValue * 1000000;
        this.setState({
          mg,
          mgInputValue: String(mg),
        });
        break;
      }
      case 'g': {
        const mg = numberValue * 1000;
        this.setState({
          mg,
          mgInputValue: String(mg),
        });
        break;
      }
      case 'mg': {
        this.setState({
          mg: numberValue,
          mgInputValue: stringValue,
        });
        break;
      }
      default: {
        console.log('Can’t recognize this unit...');
      }
    }
  }

  render() {
    let g;
    let kg;

    if (Number.isNaN(this.state.mg)) {
      g = '';
      kg = '';
    } else {
      g = this.state.mg / 1000;
      kg = this.state.mg / 1000000;
    }    

    return (
      <>
        <UnitBox unit="mg" value={this.state.mgInputValue} onValueChange={this.handleValueChange} />
        <UnitBox unit="g" value={g} onValueChange={this.handleValueChange} />
        <UnitBox unit="kg" value={kg} onValueChange={this.handleValueChange} />
      </>
    );
  }
}

export default UnitConverter;
