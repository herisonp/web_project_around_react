import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }
  return (
    <>
      <div className="page">
        <Header />
        <Main
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        title="Editar perfil"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-control">
          <input
            type="text"
            id="name"
            name="name"
            className="popup__input popup__input_type_name"
            placeholder="Nome"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error"></span>
        </div>
        <div className="popup__input-control">
          <input
            type="text"
            id="about"
            name="about"
            className="popup__input popup__input_type_about"
            placeholder="Sobre mim"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Alterar a foto do perfil"
        name="edit-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-control">
          <input
            type="url"
            id="link"
            name="link"
            className="popup__input popup__input_type_link"
            placeholder="Insira a url da imagem..."
            minLength="2"
            required
          />
          <span className="popup__error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Novo local"
        name="add-place"
        buttonLabel="Criar"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-control">
          <input
            type="text"
            id="title"
            name="title"
            className="popup__input popup__input_type_title"
            placeholder="Título"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__error"></span>
        </div>
        <div className="popup__input-control">
          <input
            type="url"
            id="image"
            name="image"
            className="popup__input popup__input_type_image"
            placeholder="Link de imagem"
            minLength="15"
            required
          />
          <span className="popup__error"></span>
        </div>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
