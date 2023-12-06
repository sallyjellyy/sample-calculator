interface OperatorButtonProps {
  operator: string;
  onOperatorClick: (operator: string) => void;
}

export const OperatorButton = ({
  operator,
  onOperatorClick,
}: OperatorButtonProps) => {
  return <button onClick={() => onOperatorClick(operator)}>{operator}</button>;
};
