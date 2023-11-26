interface OperatorButtonProps {
  operator: string;
}

export const OperatorButton = ({ operator }: OperatorButtonProps) => {
  return <button>{operator}</button>;
};
