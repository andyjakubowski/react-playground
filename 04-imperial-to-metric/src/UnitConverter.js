import React from "react";
import UnitBox from "./UnitBox";
import styles from "./UnitConverter.module.css";

const UNITS = ["g", "ounce", "pound", "kg"];
const RATIOS = {
  mg: 1,
  g: 1000,
  kg: 1000 * 1000,
  ounce: 28.35 * 1000,
  pound: 453.6 * 1000,
  stone: 224 * 28.35 * 1000,
};

const formatUnitValue = function formatUnitValue(value) {
  return Number(value.toFixed(3));
};

const isValidValue = function isValidValue(stringValue) {
  const numberValue = Number(stringValue);

  return stringValue !== "" && !Number.isNaN(numberValue);
};

class UnitConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mg: 320000,
      activeUnit: "g",
      activeUnitValue: "320",
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleValueChange(event) {
    const activeUnit = event.target.name;
    // const activeUnitValue =
    //   event.nativeEvent.inputType === "deleteContentBackward"
    //     ? ""
    //     : event.target.value;
    const activeUnitValue = event.target.value;
    let numberValue;

    if (!isValidValue(activeUnitValue)) {
      this.setState({ mg: "NaN", activeUnit, activeUnitValue });
      return;
    }

    numberValue = Number(activeUnitValue);
    this.setState({
      mg: numberValue * RATIOS[activeUnit],
      activeUnit,
      activeUnitValue,
    });
  }

  handleStepChange(event, step) {
    event.preventDefault();

    const unit = event.currentTarget.name;
    let unitValue = this.state.mg / RATIOS[unit];
    let newMgValue;

    if (!isValidValue(unitValue)) {
      return;
    }

    unitValue += step;
    newMgValue = unitValue * RATIOS[unit];
    this.setState({
      mg: newMgValue,
      activeUnit: null,
      activeUnitValue: null,
    });
  }

  render() {
    return (
      <div className={styles.UnitConverter}>
        {UNITS.map((unit) => {
          const value =
            this.state.mg === "NaN"
              ? ""
              : formatUnitValue(this.state.mg / RATIOS[unit]);

          return (
            <UnitBox
              key={unit}
              unit={unit}
              steps={[-1, -0.1, 0.1, 1]}
              value={
                unit === this.state.activeUnit
                  ? this.state.activeUnitValue
                  : value
              }
              onValueChange={this.handleValueChange}
              onStepClick={this.handleStepChange}
            />
          );
        })}
      </div>
    );
  }
}

export default UnitConverter;
