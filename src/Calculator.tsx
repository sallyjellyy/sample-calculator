import { useState } from "react";
import { NumberButton } from "./NumberButton";
import { OperatorButton } from "./OperatorButton";
import { FuncButton } from "./FunctionButton";

export const Calculator = () => {
  const [calculatedValue, setCalculatedValue] = useState("0");
  const [selectedOperator, setSelectedOperator] = useState("");

  const resetOperator = () => {
    setSelectedOperator("");
  };

  const calculate = () => {
    setCalculatedValue(eval(calculatedValue).toString());
    resetOperator();
  };

  const del = () => {
    if (calculatedValue === "0") return;
    if (calculatedValue.length === 1) setCalculatedValue("0");
    else {
      setCalculatedValue(
        calculatedValue.substring(0, calculatedValue.length - 1)
      );
    }
  };

  const clear = () => {
    setCalculatedValue("0");
    resetOperator();
  };

  const handleOperatorButtonClick = (operator: string) => {
    if (calculatedValue === "0") {
      return;
    }
    if (selectedOperator != "") {
      setCalculatedValue(
        calculatedValue.slice(0, calculatedValue.length - 1) + operator
      );
    } else {
      setCalculatedValue(calculatedValue + operator);
    }
    setSelectedOperator(operator);
  };

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
            justifyContent: "space-between",
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
          <OperatorButton
            operator="+"
            onOperatorClick={handleOperatorButtonClick}
          />
          <OperatorButton
            operator="-"
            onOperatorClick={handleOperatorButtonClick}
          />
          <OperatorButton
            operator="*"
            onOperatorClick={handleOperatorButtonClick}
          />
          <OperatorButton
            operator="/"
            onOperatorClick={handleOperatorButtonClick}
          />
          <FuncButton func="<" onFuncClick={del} />
          <FuncButton func="=" onFuncClick={calculate} />
          <FuncButton func="C" onFuncClick={clear} />
        </div>
      </div>
      <div>
        <input value={calculatedValue} style={{ textAlign: "end" }} />
        <span>원</span>
      </div>
    </>
  );
};
