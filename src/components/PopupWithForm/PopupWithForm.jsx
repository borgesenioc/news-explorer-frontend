import { useEffect, useId } from 'react';
import './PopupWithForm.css';

function PopupWithForm({ isOpen, onClose, title, children }) {
  const titleId = useId();

  // Fecha com ESC
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
    >
      <div className="popup__container" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button className="popup__close" type="button" onClick={onClose} aria-label="Fechar" />
        <h3 className="popup__title" id={titleId}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;
