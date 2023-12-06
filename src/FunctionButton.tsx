interface FuncButtonProps {
  func: string;
  onFuncClick: () => void;
}

export const FuncButton = ({ func, onFuncClick }: FuncButtonProps) => {
  return <button onClick={onFuncClick}>{func}</button>;
};
