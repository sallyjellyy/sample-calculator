import { useState } from "react";
import { NumberButton } from "./NumberButton";
import { OperatorButton } from "./OperatorButton";

export const Calculator = () => {
  const [calculatedValue, setCalculatedValue] = useState("0");
  const handleNumberButtonClick = (number: string) => {
    if (
      calculatedValue === "0" &&
      (number === "0" || number === "00" || number === "000")
    ) {
      return;
    }
    setCalculatedValue((prev) => (prev === "0" ? number : prev + number));
  };

  return (
    <>
      <div
        className="pad"
        style={{
          display: "flex",
          height: "150px",
          width: "120px",
          backgroundColor: "salmon",
        }}
      >
        <div
          className="numberPad"
          style={{
            display: "flex",
            flex: 1,
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          <div style={{ display: "flex" }}>
            <NumberButton number="7" onNumberClick={handleNumberButtonClick} />
            <NumberButton number="8" onNumberClick={handleNumberButtonClick} />
            <NumberButton number="9" onNumberClick={handleNumberButtonClick} />
          </div>
          <div style={{ display: "flex" }}>
            <NumberButton number="4" onNumberClick={handleNumberButtonClick} />
            <NumberButton number="5" onNumberClick={handleNumberButtonClick} />
            <NumberButton number="6" onNumberClick={handleNumberButtonClick} />
          </div>
          <div style={{ display: "flex" }}>
            <NumberButton number="1" onNumberClick={handleNumberButtonClick} />
            <NumberButton number="2" onNumberClick={handleNumberButtonClick} />
            <NumberButton number="3" onNumberClick={handleNumberButtonClick} />
          </div>
          <div style={{ display: "flex" }}>
            <NumberButton number="0" onNumberClick={handleNumberButtonClick} />
            <NumberButton number="00" onNumberClick={handleNumberButtonClick} />
            <NumberButton
              number="000"
              onNumberClick={handleNumberButtonClick}
            />
          </div>
        </div>
        <div
          className="operatorPad"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <OperatorButton operator="+" />
          <OperatorButton operator="-" />
          <OperatorButton operator="*" />
          <OperatorButton operator="/" />
          <OperatorButton operator="=" />
          <OperatorButton operator="<" />
        </div>
      </div>
      <div>
        <input value={calculatedValue} style={{ textAlign: "end" }} />
        <span>원</span>
      </div>
    </>
  );
};
