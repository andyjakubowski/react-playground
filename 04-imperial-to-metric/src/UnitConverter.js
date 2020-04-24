import React from "react";
import UnitBox from "./UnitBox";
import "./UnitConverter.css";

const UNITS = ["mg", "g", "kg"];
const RATIOS = {
  mg: 1,
  g: 1000,
  kg: 1000000,
};

class UnitConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mg: 1000,
      activeUnit: "mg",
      activeUnitValue: "1000",
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    const activeUnit = event.target.name;
    const activeUnitValue = event.target.value;
    let numberValue;

    if (activeUnitValue === "") {
      this.setState({ mg: "NaN", activeUnit, activeUnitValue });
      return;
    }

    numberValue = Number(activeUnitValue);
    if (Number.isNaN(numberValue)) {
      this.setState({ mg: "NaN", activeUnit, activeUnitValue });
      return;
    }

    this.setState({
      mg: numberValue * RATIOS[activeUnit],
      activeUnit,
      activeUnitValue,
    });
  }

  render() {
    return (
      <div className="UnitConverter">
        {UNITS.map((unit) => {
          const value =
            this.state.mg === "NaN" ? "" : this.state.mg / RATIOS[unit];

          return (
            <UnitBox
              key={unit}
              unit={unit}
              value={
                unit === this.state.activeUnit
                  ? this.state.activeUnitValue
                  : value
              }
              onValueChange={this.handleValueChange}
            />
          );
        })}
      </div>
    );
  }
}

export default UnitConverter;
