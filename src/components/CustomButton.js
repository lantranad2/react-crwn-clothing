import './CustomButton.scss';

const CustomButton = ({ children, googleButton, ...otherProps }) => {
  let classNames = 'CustomButton';
  if (googleButton) classNames = 'CustomButton CustomButton__google';
  return (
    <button className={classNames} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
