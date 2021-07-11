import { useState } from "react";
import PropTypes from 'prop-types';

const Input = ({
  label,
  name,
  onChange,
  placeholder,
  value,
  ...props
}) => {
  const [inputData, setInputData] = useState(value);

  return <>
    {/* In my usecase it is not possible for two inputs with the same name to be on the same page */}
    <label htmlFor={name} className="form-label">
      {label}
    </label>

    <input
      className="form-control"
      name={name}
      id={name}
      onChange={onChangeInput}
      value={inputData}
      placeholder={placeholder}
      {...props}
    />
  </>

  /**
   * @param {event} e 
   */
  function onChangeInput(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setInputData(inputValue);
    onChange(inputName, inputValue);
  }
}

Input.defaultProps = {
  placeholder: '',
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
}

export default Input;
