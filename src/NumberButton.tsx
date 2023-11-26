interface NumberButtonProps {
  number: string;
  onNumberClick: (number: string) => void;
}

export const NumberButton = ({ number, onNumberClick }: NumberButtonProps) => {
  return (
    <button
      style={{ flex: 1 }}
      onClick={() => {
        onNumberClick(number);
      }}
    >
      {number}
    </button>
  );
  ``;
};
