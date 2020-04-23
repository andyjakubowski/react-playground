import React from 'react';
import UnitBox from './UnitBox';

class UnitConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mg: 0,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    const unit = event.target.name;
    const value = event.target.value;

    switch (unit) {
      case 'kg': {
        this.setState({
          mg: value * 1000000,
        });
        break;
      }
      case 'g': {
        this.setState({
          mg: value * 1000,
        });
        break;
      }
      case 'mg': {
        this.setState({
          mg: value,
        });
        break;
      }
      default: {
        console.log('Can’t recognize this unit...');
      }
    }
  }

  render() {
    const kg = this.state.mg / 1000000;
    const g = this.state.mg / 1000;

    return (
      <>
        <UnitBox unit="kg" value={kg} onValueChange={this.handleValueChange} />
        <UnitBox unit="g" value={g} onValueChange={this.handleValueChange} />
        <UnitBox unit="mg" value={this.state.mg} onValueChange={this.handleValueChange} />
      </>
    );
  }
}

export default UnitConverter;
