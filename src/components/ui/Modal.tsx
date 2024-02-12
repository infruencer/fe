import React from 'react';
import { FC } from 'react';
import reactDom, { createPortal } from 'react-dom';
import { IModalProps } from '@/interfaces/modal.interface';

/**
 * 모달 컴포넌트
 * @param children: 자식 컴포넌트
 */
export const Modal: FC<IModalProps> = ({ children, onClose }) => {
  const portal = document.getElementById('portal') as Element;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-close-btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>,
    portal,
  );
};
