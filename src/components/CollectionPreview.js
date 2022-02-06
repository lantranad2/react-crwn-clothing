import { CollectionItem } from './CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  const previewItems = () =>
    items
      .filter((_, index) => index < 4)
      .map(({ id, ...otherProps }) => (
        <CollectionItem key={id} {...otherProps} />
      ));

  return (
    <div className="CollectionPreview">
      <h2 className="CollectionPreview__title">{title}</h2>
      <div className="CollectionPreview__item">{previewItems()}</div>
    </div>
  );
};

export default CollectionPreview;
