import React from "react";
import UnitBox from "./UnitBox";
import styles from "./UnitConverter.module.css";

const UNITS = ["mg", "g", "kg", "ounce", "pound"];
const RATIOS = {
  mg: 1,
  g: 1000,
  kg: 1000 * 1000,
  ounce: 28.35 * 1000,
  pound: 453.6 * 1000,
  stone: 224 * 28.35 * 1000,
};

class UnitConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mg: 453600,
      activeUnit: "mg",
      activeUnitValue: "453600",
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    const activeUnit = event.target.name;
    const activeUnitValue =
      event.nativeEvent.inputType === "deleteContentBackward"
        ? ""
        : event.target.value;
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
      <div className={styles.UnitConverter}>
        {UNITS.map((unit) => {
          const value =
            this.state.mg === "NaN"
              ? ""
              : Number((this.state.mg / RATIOS[unit]).toFixed(3));

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
