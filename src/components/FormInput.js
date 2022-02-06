import './FormInput.scss';

const FormInput = ({ label, handleChange, ...otherProps }) => {
  const labelClassNames = otherProps.value.length
    ? 'FormInput__label FormInput__label-on-top'
    : 'FormInput__label';

  return (
    <div className="FormInput">
      <input
        className="FormInput__input"
        onChange={handleChange}
        {...otherProps}
      />
      <label className={labelClassNames}>{label}</label>
    </div>
  );
};

export default FormInput;
