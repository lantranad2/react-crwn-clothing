import './CollectionItem.scss';

export const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="CollectionItem">
    <div
      className="CollectionItem__img-box"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="CollectionItem__footer">
      <span className="CollectionItem__name">{name}</span>
      <span className="CollectionItem__price">{`$${price}`}</span>
    </div>
  </div>
);
