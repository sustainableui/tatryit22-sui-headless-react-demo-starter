import React from 'react';
import cns from 'classnames';

const BLUE_CONTAINED_CLASSES = 'bg-blue text-white font-futura-bold hover:bg-white hover:text-blue';
const GREEN_CONTAINED_CLASSES =
  'bg-green text-black font-futura-bold hover:bg-white hover:text-blue';
const BLUE_OUTLINED_CLASSES =
  'bg-transparent text-blue font-futura-medium border-4 border-blue hover:text-white hover:border-0 hover:bg-blue';
const GREEN_OUTLINED_CLASSES =
  'bg-transparent text-green font-futura-medium border-4 border-green hover:text-white hover:border-0 hover:bg-green';
const DISABLED_CLASSES = 'bg-gray-hover text-white font-futura-bold pointer-events-none';

interface ButtonProps {
  color?: 'green' | 'blue';
  variant?: 'contained' | 'outlined';
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

function Button({
  text,
  color = 'blue',
  disabled = false,
  variant = 'contained',
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cns(
        'transition-colors duration-500 ease-in-out inline-flex items-center focus:outline-none px-14 py-3 sm:px-8 sm:py-2 xs:px-8 xs:py-2',
        {
          [DISABLED_CLASSES]: disabled,
          [GREEN_OUTLINED_CLASSES]: color === 'green' && variant === 'outlined',
          [GREEN_CONTAINED_CLASSES]: color === 'green' && variant === 'contained',
          [BLUE_OUTLINED_CLASSES]: color === 'blue' && variant === 'outlined',
          [BLUE_CONTAINED_CLASSES]: color === 'blue' && variant === 'contained'
        }
      )}>
      {text}
    </button>
  );
}

export default Button;
