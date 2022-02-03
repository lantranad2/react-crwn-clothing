import { useNavigate } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  let className = `MenuItem`;
  if (size === 'large') className += ' MenuItem__large';

  return (
    <div className={className} onClick={() => navigate(`${linkUrl}`)}>
      <div
        className="MenuItem__bgImg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="MenuItem__content">
        <h3 className="MenuItem__title">{title}</h3>
        <span className="MenuItem__subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
