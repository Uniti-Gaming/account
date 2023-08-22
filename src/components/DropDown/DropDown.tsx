import { FC, useEffect } from 'react';

interface DropDownProps {
    children: JSX.Element[] | JSX.Element;
    onClose: () => void;
    className: string
}
const DropDown: FC<DropDownProps> = ({ children, className, onClose }) => {
  useEffect(() => {
    document.addEventListener('click', onClose);
    return () => {
      document.removeEventListener('click', onClose);
    };
  }, [onClose]);
    
  return (
    <div
      className={className}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default DropDown;