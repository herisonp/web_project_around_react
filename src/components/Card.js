export default function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li key={card._id} className="posts__item">
      <button className="posts__trash-btn posts__trash-btn_hidden"></button>
      <div className="posts__image-wrapper">
        <img
          src={card.link}
          className="posts__image"
          alt={card.name}
          onClick={handleCardClick}
        />
      </div>
      <div className="posts__description">
        <h2 className="posts__title">{card.name}</h2>
        <div className="posts__like-group">
          <button className="button posts__btn-like"></button>
          <span className="posts__like-number">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
