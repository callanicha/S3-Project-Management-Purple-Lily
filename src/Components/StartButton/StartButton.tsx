import React from "react";

interface StartButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const StartButton: React.FC<StartButtonProps> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default StartButton;