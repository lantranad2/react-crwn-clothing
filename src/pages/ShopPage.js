import { Component } from 'react';
import CollectionPreview from '../components/CollectionPreview';
import SHOP_DATA from '../data/shop';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  _renderCollectionPreview() {
    return SHOP_DATA.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ));
  }

  render() {
    return <div className="ShopPage">{this._renderCollectionPreview()}</div>;
  }
}

export default ShopPage;
