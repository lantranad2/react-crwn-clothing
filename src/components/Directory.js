import { Component } from 'react';

import './Directory.scss';

import MenuItem from './MenuItem';
import hatsImg from '../assets/hats.png';
import sneakersImg from '../assets/sneakers.png';
import jacketsImg from '../assets/jackets.png';
import womensImg from '../assets/womens.png';
import mensImg from '../assets/mens.png';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          id: 1,
          title: 'hats',
          imageUrl: hatsImg,
        },
        {
          id: 2,
          title: 'jackets',
          imageUrl: jacketsImg,
        },
        {
          id: 3,
          title: 'sneakers',
          imageUrl: sneakersImg,
        },
        {
          id: 4,
          title: 'womens',
          imageUrl: womensImg,
          size: 'large',
        },
        {
          id: 5,
          title: 'mens',
          imageUrl: mensImg,
          size: 'large',
        },
      ],
    };
  }

  _menuItems = () => {
    return this.state.sections.map((s) => (
      <MenuItem
        key={s.id}
        title={s.title}
        imageUrl={s.imageUrl}
        size={s.size}
      />
    ));
  };

  render() {
    return <div className="Directory">{this._menuItems()}</div>;
  }
}

export default Directory;