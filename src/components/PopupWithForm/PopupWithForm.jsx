import { useEffect } from 'react';
import './PopupWithForm.css';

function PopupWithForm({ isOpen, onClose, title, children }) {
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
    >
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose} />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;
