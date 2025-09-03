/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function CustomInput({ labelText, name, type, placeholder, item, setItem, disabled }) {
  const handleOnChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <div css={s.input}>
      <label htmlFor={name}>{labelText}</label>
      <input css={s.input} name={name} type={type} placeholder={placeholder}  value={item} onChange={(e) => handleOnChange(e)} disabled={disabled} />
    </div>
  );
}

export default CustomInput;
