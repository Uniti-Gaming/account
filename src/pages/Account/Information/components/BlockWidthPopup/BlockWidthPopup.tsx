import { FC, useState } from 'react';

import { PopupProps } from '@interfaces/PopupProps';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';

interface BlockWidthPopupProps {
    title: string
    button: {
        text: string
        edit?: boolean;
    }
    children: JSX.Element | JSX.Element[]
    Popup: FC<PopupProps>
}

const BlockWidthPopup: FC<BlockWidthPopupProps> = ({ title, button, children, Popup }) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  return (
    <LayoutBlock
      title={title}
      button={{ ...button, handleClick: () => setPopupIsOpen(true) }}
    >
      <>
        {children}
        {popupIsOpen && (<Popup handleClose={() => setPopupIsOpen(false)} title={title} isOpen={popupIsOpen} />)}
      </>
    </LayoutBlock>
  );
};

export default BlockWidthPopup;