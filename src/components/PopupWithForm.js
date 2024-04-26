import { useEffect, useState } from "react";
import iconClose from "../images/close-icon.svg";

export default function PopupWithForm({
  children,
  isOpen,
  onClose,
  title,
  name,
  buttonLabel = "Salvar",
}) {
  const [open, setOpen] = useState(isOpen);

  function handleCloseClick() {
    setOpen(false);
    onClose();
  }

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`popup ${
        open ? "popup_opened" : "popup_closed"
      }  popup_${name}`}
    >
      <div className="popup__container">
        <button className="button popup__btn-close" onClick={handleCloseClick}>
          <img
            src={iconClose}
            alt="Ícone do botão de fechar popup"
            className="popup__close-icon"
          />
        </button>
        <h2 className="popup__title">{title}</h2>
        <form name={name} className={`popup__form popup__form_${name}`}>
          <fieldset className="popup__fieldset">{children}</fieldset>
          <button type="submit" className="button popup__btn-submit">
            {buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
}
